import React, {Component} from 'react';

import 'whatwg-fetch';
import getCookie from 'js-cookie';
import jQuery from 'jquery'; 

// const csrfToken= ""
export default class CsrfToken extends Component {
	
  constructor(props){
		super(props);
		this.state = {
			csrfToken:''
		}
	}

  getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
  }


	// loadCsrfToken(){
 //    	const endPoint = `http://158.144.43.11:1200/csrf/`
 //      // const csrfToken = {csrfToken}
 //    	// let thisComp = this


 //    	let lookupOptions = {
 //      		method: "GET"
 //    	}  

    	
	//     fetch(endPoint,lookupOptions)
	//       .then(function(response){
 //          console.log("xxxxxxxxxxxxxxxxxxxxxxxxx")
	//         return response.json()
	//       }).then(function(responseData){
	//         console.log(responseData)
	//         console.log("mmmmmmmmmmmmmmmmmmmmmmmmm")
 //          this.setState({
	//           csrfToken:responseData.csrfToken
	//         })
          
 //          console.log(responseData.csrfToken)
 //          console.log("function ")
	//       }).catch(function(error){
	//         console.log("error", error)
	//       })

  // }


  // componentDidMount(){

  //   this.setState({
  //     csrfToken:csrfToken
  //   })
  //   this.loadCsrfToken()
  // }

  render(){

                var csrftoken = getCookie('csrftoken');
                console.log(csrftoken)  
                  // const {csrfToken} = this.state
                  // console.log(csrfToken)
                  console.log("-====================================================")
    return (
        <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
    );
  }
}
export const csrfToken={csrfToken};