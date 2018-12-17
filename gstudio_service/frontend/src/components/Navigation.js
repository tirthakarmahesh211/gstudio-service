import React, {Component} from 'react';
import note from  './../icons/note.png';
import message from './../icons/message.png';
import bookmark from './../icons/bookmark.png';
import notification from './../icons/notification.png';
import badge from './../icons/badge.png';
import avatar from './../icons/avatar.png';
import metastudio from './../icons/metastudiologo.png';
import grid from './../icons/9grid.png';

class Navigation extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
            <div className="wrapper">

            <nav id="sidebar">
            <div className="sidebar-header">
                <img src ={metastudio} width="245"/>
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
                    <a href="#">Updates</a>
                </li>
                <li>
                    <a href="#">Groups</a>
                    
                </li>
                <li>
                    <a href="#">Courses</a>
                </li>
                <li>
                    <a href="#">Blogs</a>
                </li>
                <li>
                    <a href="#">Resourses</a>
                </li>
                <li>
                    <a href="#pageSubmenu1" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
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

        <div id="content">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <button type="button" id="sidebarCollapse" className="navbar-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                      <div class="grid-button">
                        <a className="nav-link" href="#"><img src ={grid} alt="" width="30" height="35"/></a>
                        </div>
  
                    <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-align-justify"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav navbar-nav ml-auto">

                            <li className="nav-item active">
                                <a className="nav-link" href="#"><img src ={note} alt="" width="30" height="35"/></a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#"><img src ={message} alt="" width="30" height="35"/></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><img src ={bookmark} alt="" width="30" height="35"/></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><img src ={notification} alt="" width="30" height="35"/></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><img src ={badge} alt="" width="30" height="35"/></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><img src ={avatar} alt="" width="30" height="35"/></a>
                            </li>

                            
                        </ul>
                    </div>
                </div>
            </nav>


            <div className="row">
    <div className="col-md-8 col-xs-12 contentcenter">

        <div className="card ">
                 <div className="card-header">Header</div>
                    <div className="card-body">
                        <h2>Collapsible Sidebar Using Bootstrap 4</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div className="line"></div>

            <h2>Lorem Ipsum Dolor</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div className="line"></div>

            <h2>Lorem Ipsum Dolor</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div className="line"></div>

            <h3>Lorem Ipsum Dolor</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


                    </div> 
                <div className="card-footer">Footer</div>
</div>   

            
    </div>
    <div className="col-md-4 col-xs-12">

        <div className="card">
  <div className="card-header">Header</div>
  <div className="card-body">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div className="line"></div>

            <h2>Lorem Ipsum Dolor</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div className="line"></div>

            <h2>Lorem Ipsum Dolor</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div className="line"></div>

            <h3>Lorem Ipsum Dolor</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>

  </div> 
  <div className="card-footer">Footer</div>
</div>
            
  </div>
            
                    </div>
    </div>

        )
     }       
  }   


export default Navigation;  