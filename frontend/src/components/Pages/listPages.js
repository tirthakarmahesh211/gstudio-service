import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import CreatePage from './create_Page';
import {Button} from 'primereact/button';
import 'whatwg-fetch';
import {Paginator} from 'primereact/paginator';
import Pagination from "react-js-pagination";


import {DataView, DataViewLayoutOptions} from 'primereact/dataview';

//require("bootstrap/less/bootstrap.less");

class listPages extends Component{
  constructor(props){
        super(props);
        this.state = {
            pages:[],
            activePage: 1,
            pageCount: '',
            itemsCountPerPage: 5,
                       dataViewValue:[],
            first: 0, 
            rows: 10, 
            currentPageNumber: 1,
            totalItems: 1,
            itemsPerPage:5

          
        };
        this.handlePageChange = this.handlePageChange.bind(this);
        this.onPageChange = this.onPageChange.bind(this);

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
          pages:thisComp.state.pages.concat(responseData.hits.hits),
          totalPages: thisComp.state.totalPages.concat(responseData.hits.total),
          currentPageNumber: thisComp.state.currentPageNumber.concat(responseData.hits.currentPageNumber),          
          itemsPerPage: thisComp.state.itemsPerPage.concat(responseData.hits)
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
            return <div className="p-col-12 p-md-3 p-lg-3"><TableRow obj={object}  key={i} /></div>;
        });
  }

  onPageChange(event) {
        this.setState({
            first: event.first,
            rows: event.rows
        });
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }

  render(){
                  const {pages, pageCount, pageNumber, pageRangeDisplayed} = this.state
    return(
                <div className="content-section implementation dataview-demo">
                      <CreatePage/><br/>
                      <Paginator first={this.state.currentPageNumber} rows={this.state.rows} totalRecords={pages} rowsPerPageOptions={[10,20,30]} onPageChange={this.onPageChange}></Paginator>
                      <br/>  
                      <div className="p-grid"> 

                          {this.tabRow()}

                         
                      </div>
                </div>

        );
  }
}


export default listPages;











