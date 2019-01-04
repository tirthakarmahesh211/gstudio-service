import React, {Component} from 'react';

import 'whatwg-fetch';


export default class CsrfToken extends Component {
	constructor(props){
		super(props);
		this.state = {
			csrfToken:''
		}
	}

	loadCsrfToken(){
    	const endPoint = `http://158.144.43.11:1200/csrf/`

    	let thisComp = this


    	let lookupOptions = {
      		method: "GET"
    	}  

    	
	    fetch(endPoint,lookupOptions)
	      .then(function(response){
	        return response.json()
	      }).then(function(responseData){
	        console.log(responseData)
	        thisComp.setState({
	          csrfToken:thisComp.state.csrfToken.concat(responseData.csrfToken)
	        })
	      }).catch(function(error){
	        console.log("error", error)
	      })
  }


  componentDidMount(){

    this.setState({
      csrfToken:''
    })
    this.loadCsrfToken()
  }


  render(){
                  const {csrfToken} = this.state
                  console.log(csrfToken)
    return(

    		 <input type="hidden" name="csrfmiddlewaretoken" value={csrfToken} />
        );
  }
}
