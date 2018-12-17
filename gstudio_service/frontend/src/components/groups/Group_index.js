

import React, { Component } from 'react';
import Header from '../Header';

class Group_index extends Component {
  render() {
    return (

    	<div id="content"> 
    	<Header/>
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
