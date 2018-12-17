

import React, { Component } from 'react';
import Header from '../Header';
import axios from 'axios';


class Group_index extends Component {  

	constructor(props){
	  super(props)
	  this.state = {
	    users: [],
	    store: []
	  }
	}
	componentDidMount(){
	  axios.get('https://nroer.gov.in/api/v1?_type=Group')
	  .then(json => console.log(json))
	}	

  render() {
    return (
    	<div id="content"> 
    	<Header/>
    	<nav aria-label="breadcrumb">
		  <ol className="breadcrumb">
		    <li className="breadcrumb-item"><a href="#">Members</a></li>
		    <li className="breadcrumb-item"><a href="#">Groups</a></li>
		    <li className="breadcrumb-item active" aria-current="page">Group Name</li>
		  </ol>
		</nav>
    		<div className="row">
    			<div className="col-md-8  contentcenter">
    				<div className="card ">
    					<div className="card-header">
    						Groups
    					</div>
    					<div className="card-body">
    					
    					</div> 
    					<div className="card-footer">
    						footer
    					</div>
    				</div>   
    			</div>
    			<div className="col-md-4 ">
    				<div className="card">
    					<div className="card-header">
    						Group Detail
    					</div>
    					<div className="card-body">
    					</div>
 
    					<div className="card-footer">
    						Footer
    					</div>
    				</div>	
		    	</div>
    		</div>
    	</div>

    );
  }
}

export default Group_index;
