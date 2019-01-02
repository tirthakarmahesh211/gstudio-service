import React, { Component } from 'react';

import Header from '../Header';
import axios from 'axios';
import 'whatwg-fetch'
import cookie from 'react-cookies'


class Group_index extends Component {  
	loadGroups(){
		let endpoint = 'https://staging.metastudio.org/api/v1?_type=Group'
		let lookupOptions = {
			method: "GET",
			headers:{
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
			}
		}
		fetch(endpoint, lookupOptions)
		.then(function(response){
			return response.json()
		}).then(function(responseData){
			console.log(responseData)
		}).catch(function(error){
			console.log("error", error)
		})
	}

	componentDidMount(){
		this.loadGroups()
	}	

  render() {
    return (
    	<div id="content"> 
    	<Header/>
    	<nav aria-label="breadcrumb">
		  <ol className="breadcrumb">

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
    						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate risus justo, non accumsan urna semper ut. Quisque consequat consectetur nisl, pellentesque vulputate purus egestas a. Sed fermentum arcu turpis, at faucibus lectus sagittis sit amet. Donec lacinia consequat velit, at consequat odio. Ut sed tortor eu lorem fringilla semper at ac mi. Aliquam bibendum tellus et dui tempor tincidunt. Proin ultrices, est non eleifend porttitor, purus justo pulvinar urna, vitae semper neque elit non sapien.

Vivamus accumsan turpis quis magna feugiat, a facilisis libero laoreet. Sed mauris magna, bibendum in nunc cursus, ornare tempor diam. Integer quis volutpat eros. Suspendisse lacinia lacinia purus, tincidunt dapibus velit malesuada a. Vestibulum sit amet nisi gravida, porttitor odio sed, cursus ligula. Fusce vestibulum libero a quam consectetur, quis mattis turpis vehicula. Nunc molestie odio nec purus iaculis, vitae gravida dui placerat. Morbi ut ipsum vitae tellus accumsan rhoncus.

Phasellus non felis iaculis, fringilla mi quis, aliquam nisl. Integer dapibus lorem risus, ac venenatis tortor convallis at. Fusce sit amet quam vitae augue aliquet lobortis et a nibh. Suspendisse vel purus fringilla ante ornare euismod. Nam porttitor, augue condimentum efficitur dapibus, mauris metus viverra nibh, vitae egestas dolor lectus at sem. Donec dictum lorem nunc, et rhoncus lorem consectetur nec. Etiam velit libero, dictum sed nisi vel, fringilla eleifend nibh. Etiam interdum urna in nibh facilisis, eget vehicula sapien imperdiet. Duis velit neque, posuere non ipsum eu, fermentum fermentum mauris.
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
    						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate risus justo, non accumsan urna semper ut. Quisque consequat consectetur nisl, pellentesque vulputate purus egestas a. Sed fermentum arcu turpis, at faucibus lectus sagittis sit amet. Donec lacinia consequat velit, at consequat odio. Ut sed tortor eu lorem fringilla semper at ac mi. Aliquam bibendum tellus et dui tempor tincidunt. Proin ultrices, est non eleifend porttitor, purus justo pulvinar urna, vitae semper neque elit non sapien.

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
