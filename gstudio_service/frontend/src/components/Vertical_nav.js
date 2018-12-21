import React, {Component} from 'react';

class Vertical_nav extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (       
              <div className="row">
                <nav className="col-md-2 d-none d-md-block col-lg-2 bg-light sidebar">
                  <div className="sidebar-sticky">
                    <div className="form-group has-search">
                    <span className="fa fa-search form-control-feedback"></span>
                    <input type="text" className="form-control" placeholder="Search"/>
                   
                  </div>
                  
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link active" href="#">
                          <span data-feather="home"></span>
                          Updates <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span data-feather="file"></span>
                          Groups
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span data-feather="shopping-cart"></span>
                          Courses
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span data-feather="users"></span>
                          Blogs
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span data-feather="bar-chart-2"></span>
                          Resourses
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span data-feather="layers"></span>
                          Pages
                        </a>
                      </li>
                    </ul>

                    <ul className="nav flex-column mb-2">
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span data-feather="file-text"></span>
                          Topic Map
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span data-feather="file-text"></span>
                          Concept Map
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span data-feather="file-text"></span>
                          Events
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span data-feather="file-text"></span>
                          Analytics
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>

            </div>
         )
     }       
  }   


export default Vertical_nav;             