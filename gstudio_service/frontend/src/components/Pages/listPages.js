import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import CreatePage from './create_Page';
import {Button} from 'primereact/button';
import 'whatwg-fetch';

class listPages extends Component{
  constructor(props){
        super(props);
        this.state = {
            pages:[]
        };
  }

  loadPages(){
    const endPoint = `https://staging.metastudio.org/home/course/activities/?api_call=True`

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
          pages:thisComp.state.pages.concat(responseData.hits.hits)
        })
      }).catch(function(error){
        console.log("error", error)
      })
  }

  componentDidMount(){
    this.setState({
      pages:[]
    })
    this.loadPages()
  }

  tabRow(){
         return this.state.pages.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        });
  }

  render(){
                  const {pages} = this.state
    return(

                <div className="p-grid">
                    <div className="p-col-12 p-md-12 p-lg-12">
                    <div className="card card-w-title">
                      <CreatePage/>
                                           <div className="p-col-12 p-md-12">
                      {this.tabRow()}
                      </div>
                     </div> 
                </div>
              </div>  
        );
  }
}


export default listPages;











