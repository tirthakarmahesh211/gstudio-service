import React, {Component} from 'react';

class Navigation extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler mr-3" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">Metastudio </a>

                <div className="ml-auto order-lg-last">
                    <ul className="navbar-nav flex-row">
                        <li className="nav-item pr-3 pr-lg-0">
                            <a className="nav-link" href="#">
                                <i className="fa fa-bell" aria-hidden="true"></i>
                                <span className="badge badge-pill badge-danger">5</span>
                            </a>
                        </li>
                        <li className="nav-item pr-3 pr-lg-0">
                            <a className="nav-link" href="#">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                <span className="badge badge-pill badge-warning">6</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fa fa-telegram" aria-hidden="true"></i>
                                <span className="badge badge-pill badge-primary">8</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <button className="navbar-toggler ml-3" type="button" data-toggle="collapse" data-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation2">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Left Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Left Link 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Left Link 2</a>
                        </li>
                    </ul>
                </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent2">
                    <ul className="navbar-nav mr-auto d-lg-none">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Right Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Right Link 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Right Link 2</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
     }       
  }   


export default Navigation;  