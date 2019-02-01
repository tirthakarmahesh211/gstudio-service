import React, {Component} from 'react';
import classNames from 'classnames';
import {AppTopbar} from './AppTopbar';
import {AppMenu} from './AppMenu';
import {AppInlineProfile} from './AppInlineProfile';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { withRouter } from "react-router-dom";

import {MenusDemo} from './components/MenusDemo';

import {Updates} from './components/Updates/updates';
import listPages from './components/Pages/listPages';
import PageDetails from './components/Pages/PageDetails';
import {listGroups} from './components/Groups/listGroups';
import {listCourses} from './components/Courses/listCourses';
import listBlogs from './components/Blogs/listBlogs';
import Readepub from './components/Readepub';

import {ScrollPanel} from 'primereact/components/scrollpanel/ScrollPanel';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'fullcalendar/dist/fullcalendar.css';
import './layout/layout.css';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            layoutMode: 'static',
            layoutColorMode: 'dark',
            staticMenuInactive: false,
            overlayMenuActive: false,
            mobileMenuActive: false
        };

        this.onWrapperClick = this.onWrapperClick.bind(this);
        this.onToggleMenu = this.onToggleMenu.bind(this);
        this.onSidebarClick = this.onSidebarClick.bind(this);
        this.onMenuItemClick = this.onMenuItemClick.bind(this);
        this.createMenu();
    }

    onWrapperClick(event) {
        if (!this.menuClick) {
            this.setState({
                overlayMenuActive: false,
                mobileMenuActive: false
            });
        }

        this.menuClick = false;
    }

    onToggleMenu(event) {
        this.menuClick = true;

        if (this.isDesktop()) {
            if (this.state.layoutMode === 'overlay') {
                this.setState({
                    overlayMenuActive: !this.state.overlayMenuActive
                });
            }
            else if (this.state.layoutMode === 'static') {
                this.setState({
                    staticMenuInactive: !this.state.staticMenuInactive
                });
            }
        }
        else {
            const mobileMenuActive = this.state.mobileMenuActive;
            this.setState({
                mobileMenuActive: !mobileMenuActive
            });
        }
       
        event.preventDefault();
    }

    onSidebarClick(event) {
        this.menuClick = true;
        setTimeout(() => {this.layoutMenuScroller.moveBar(); }, 500);
    }

    onMenuItemClick(event) {
        if(!event.item.items) {
            this.setState({
                overlayMenuActive: false,
                mobileMenuActive: false
            })
        }
        this.left -= this.props.menuWidth;
        this.rootSlideMenuSub.style.left = this.left + 'px';
        this.updateBackward();
    }

    createMenu() {
        this.menu = [
            {label: 'Updates', icon: 'pi pi-fw pi-home', command: () => {window.location = '/'}},
            {label: 'Groups', icon: 'pi pi-fw pi-users', command: () => {window.location = '/groups'}},
            {label: 'Courses', icon: 'pi pi-fw pi-home', command: () => {window.location = '/courses'}},
            {label: 'Pages', icon: 'pi pi-fw pi-file', command: () => {window.location = '/pages'}},
            {label: 'Blogs', icon: 'pi pi-fw pi-file', command: () => {window.location = '/blogs'}},
        ];
    }

    addClass(element, className) {
        if (element.classList)
            element.classList.add(className);
        else
            element.className += ' ' + className;
    }

    removeClass(element, className) {
        if (element.classList)
            element.classList.remove(className);
        else
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }

    isDesktop() {
        return window.innerWidth > 1024;
    }

    componentDidUpdate() {
        if (this.state.mobileMenuActive)
            this.addClass(document.body, 'body-overflow-hidden');
        else
            this.removeClass(document.body, 'body-overflow-hidden');
    }

    render() {
        let logo = this.state.layoutColorMode === 'dark' ? 'assets/layout/images/metastudio-logo.png': 'assets/layout/images/metastudio-logo.png';

        let wrapperClass = classNames('layout-wrapper', {
            'layout-overlay': this.state.layoutMode === 'overlay',
            'layout-static': this.state.layoutMode === 'static',
            'layout-static-sidebar-inactive': this.state.staticMenuInactive && this.state.layoutMode === 'static',
            'layout-overlay-sidebar-active': this.state.overlayMenuActive && this.state.layoutMode === 'overlay',
            'layout-mobile-sidebar-active': this.state.mobileMenuActive
        });
        let sidebarClassName = classNames("layout-sidebar", {'layout-sidebar-dark': this.state.layoutColorMode === 'dark'});

        return (
            <div className={wrapperClass} onClick={this.onWrapperClick}>
                <AppTopbar onToggleMenu={this.onToggleMenu}/>

                <div ref={(el) => this.sidebar = el} className={sidebarClassName} onClick={this.onSidebarClick}>

                    <ScrollPanel ref={(el) => this.layoutMenuScroller = el} style={{height:'100%'}}>
                        <div className="layout-sidebar-scroll-content" >
                            <div className="layout-logo">
                                <img alt="Logo" src={logo} />
                            </div>
                            <AppInlineProfile />
                            
                            <AppMenu model={this.menu} onMenuItemClick={this.onMenuItemClick} />
                        </div>
                    </ScrollPanel>
                </div>

                <div className="layout-main">
                    <Route path="/" exact component={Updates} />
                    <Route path="/groups" component={listGroups} />
                    <Route path="/courses" component={listCourses} />
                    <Route path="/pages" component={listPages} />
                    <Route path="/blogs" component={listBlogs} />
                    <Route path="/epubs" component={Readepub} />
                    <Route path="/:this.props.obj._source.name" component={PageDetails} />
                </div>

                <div className="layout-mask"></div>
            </div>
        );
    }
}

export default App;