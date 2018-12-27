import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

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
          .catch( error =>{
            let response = error.response;
            alert("Error loading data:" + response.status + " "+ response.statusText);
          });         
    }

    tabRow(){
         return this.state.pages.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        });
    }

    render(){
        return(
            <div>
                    {this.tabRow()}
            </div>
        );
    }
} 














