import React, { Component } from 'react';
import PostData from './../public/data/fake.json';
import axios from 'axios';

class TestLocal extends Component{
	constructor(){
		super();
		this.state = {
			altnames:'',
			name:''
		}
	}


	componentDidMount() {
	 fetch('../../public/data/fake.json') // JSON File Path
	   .then(function (res) {
        return res.json();
    	}).then(function(responseData){
        console.log(responseData)
        this.setState({
          altnames:this.state.responseData.PostData.altnames        
        })
      })
    }	
	     //console.log(altnames)
	
	 

	render(){
		const {altnames, name} = this.state;
		return(
				<div>
					{this.altnames}
				</div>
			)
	}
}

export default TestLocal;