import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Group_index from './groups/Group_index';
import Resourses from './Resourses';
import Courses from './Courses';
import Blogs from './Blogs';
import Pages from './Pages';
import Updates from './Updates';
import metastudio from './../icons/metastudiologo.png';


class Navigation extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
         <Router>
            <div className="wrapper">

            <nav id="sidebar">
            <div className="sidebar-header">
                <img src ={metastudio} width="250" alt="logo"/>
            </div>


            <ul className="list-unstyled components">

                <li className="sidebar-search">
                    <div>
                        <div className="input-group">
                            <input type="text" className="form-control search-menu" placeholder="Search..."/>
                            <div className="input-group-append">
                                <span className="input-group-text">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </li>


                <li className="active">
                    <Link to={'/'} className="nav-link"> Updates</Link>
                </li>
                <li>
                    <Link to={'/Group_index'} className="nav-link"> Groups</Link>     
                </li>
                <li>
                    <Link to={'/Courses'} className="nav-link"> Courses</Link>
                </li>
                <li>
                    <Link to={'/Blogs'} className="nav-link"> Blogs</Link>
                </li>
                <li>
                    <Link to={'/Resourses'} className="nav-link"> Resourses</Link>
                </li>
                <li>
                    <Link to={'/Pages'} className="nav-link"> <a href="#pageSubmenu1" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a></Link>
                    <ul className="collapse list-unstyled" id="pageSubmenu1">
                        <li>
                            <a href="#">Page 1</a>
                        </li>
                        <li>
                            <a href="#">Page 2</a>
                        </li>
                        <li>
                            <a href="#">Page 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">Topic Map</a>
                </li>
                <li>
                    <a href="#">Mind Map</a>
                </li>
                <li>
                    <a href="#">Concept Map</a>
                </li>
                <li>
                    <a href="#">Events</a>
                </li>
                <li>
                    <a href="#">Analytics</a>
                </li>
            </ul>

        </nav>

        <Switch>
              <Route exact path='/' component={Updates} />
              <Route path='/Group_index' component={Group_index} />
              <Route path='/Courses' component={Courses} />
              <Route path='/Blogs' component={Blogs} />
              <Route path='/Resourses' component={Resourses} />
              <Route path='/Pages' component={Pages} />
          </Switch>


    </div>
     </Router>

        )
     }       
  }   


export default Navigation;  