import React, {Component} from 'react';

import 'whatwg-fetch';

// const csrfToken= ""
export default class CsrfToken extends Component {
	
  constructor(props){
		super(props);
		this.state = {
			csrfToken:''
		}
	}

	loadCsrfToken(){
    	const endPoint = `http://158.144.43.11:1200/csrf/`
      // const csrfToken = {csrfToken}
    	// let thisComp = this


    	let lookupOptions = {
      		method: "GET"
    	}  

    	
	    fetch(endPoint,lookupOptions)
	      .then(function(response){
          console.log("xxxxxxxxxxxxxxxxxxxxxxxxx")
	        return response.json()
	      }).then(function(responseData){
	        console.log(responseData)
	        console.log("mmmmmmmmmmmmmmmmmmmmmmmmm")
          this.setState({
	          csrfToken:responseData.csrfToken
	        })
          
          console.log(responseData.csrfToken)
          console.log("function ")
	      }).catch(function(error){
	        console.log("error", error)
	      })

  }


  componentDidMount(){

    this.setState({
      csrfToken:csrfToken
    })
    this.loadCsrfToken()
  }

  render(){
                  // const {csrfToken} = this.state
                  // console.log(csrfToken)
                  console.log("-====================================================")
    return(

    		 <input type="hidden" name="csrfmiddlewaretoken" value={"csrfToken"} />
        );
  }
}
export const csrfToken={csrfToken};