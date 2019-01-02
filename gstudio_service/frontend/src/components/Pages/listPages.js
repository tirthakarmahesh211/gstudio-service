import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import CreatePage from './create_Page';
import {Button} from 'primereact/button';

export class listPages extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            pages:[]
        };
    }

    componentDidMount(){
        let endPoint = `http://localhost:7000/get_pages/?group_id=home&api_call=True`; 
        axios.get(endPoint)
          .then( response=> {
            const pages = response.data.hits.hits;
            console.log(response);
            this.setState({
                pages
            });
          })        
    }

    tabRow(){
         return this.state.pages.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        });
    }

    render(){
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














