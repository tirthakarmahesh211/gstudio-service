import React, {Component} from 'react';
import {Menu} from 'primereact/menu';
import {Button} from 'primereact/button';

export default class listBlogs extends Component {

    constructor() {
        super();
        this.state = {
            items: [
                {
                    label: 'Options',
                    items: [{label: 'Upload', icon: 'pi pi-fw pi-upload', command:()=>{ window.location.hash="/fileupload"; }},
                            {label: 'Home', icon: 'pi pi-fw pi-home', url: 'http://primetek.com.tr'}]
                }, 
                {
                    label: 'Account',
                    items: [{label: 'Components', icon: 'pi pi-fw pi-cog', command:()=>{ window.location.hash="/"; }},
                            {label: 'Sign Out', icon: 'pi pi-fw pi-power-off'} ]
                }
            ]
        };
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Menu</h1>
                        <p>Menu is a navigation/command component that supports dynamic and static positioning.</p>
                    </div>
                </div>

                <div className="content-section implementation button-demo">
                    <h3 className="first">Basic</h3>
                    <Menu model={this.state.items}/>

                    <h3>Popup</h3>
                    <Menu model={this.state.items} popup={true} ref={el => this.menu = el}/>
                    <Button label="Show" icon="pi pi-bars" onClick={(event) => this.menu.toggle(event)}/>
                </div>
            </div>
        )
    }
}