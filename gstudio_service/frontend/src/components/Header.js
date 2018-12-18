import React, { Component } from 'react';

import note from  './../icons/note.png';
import message from './../icons/message.png';
import bookmark from './../icons/bookmark.png';
import notification from './../icons/notification.png';
import badge from './../icons/badge.png';
import avatar from './../icons/avatar.png';
import grid from './../icons/9grid.png';

class Header extends Component {
  render() {
    return (
      <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <button type="button" id="sidebarCollapse" className="navbar-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div className="grid-button">

                        <a className="nav-link" href="#" title="" data-toggle="popover" data-placement="bottom" data-html="true" data-content=" <a href=''>Groups</a><br><a href=''>Courses</a><br><a href=''>Blogs</a><br><a href=''>Resources</a><br><a href=''>Pages</a>"><img src ={grid} alt="" width="30" height="30"/></a>

                    </div>

                    <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-align-justify"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav navbar-nav ml-auto">

                            <li className="nav-item rounded-circle active">
                                <a className="nav-link" href="#"><img src ={note} alt="" className="img-round" width="25" height="30"/></a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#"><img src ={message} alt="" width="30" height="30"/></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><img src ={bookmark} alt="" width="30" height="30"/></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><img src ={notification} alt="" width="30" height="30"/></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><img src ={badge} alt="" width="30" height="30"/></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><img src ={avatar} alt="" width="30" height="30"/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
      </div>
    );
  }
}



export default Header;
