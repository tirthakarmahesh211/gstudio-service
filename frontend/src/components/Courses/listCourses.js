import React, { Component } from 'react';
import {Panel} from 'primereact/panel';
import {PanelsDemo} from './../PanelsDemo';
import {BreadCrumb} from 'primereact/breadcrumb';
import {InputText} from 'primereact/inputtext';
import {Toolbar} from 'primereact/toolbar';
import {Button} from 'primereact/button';
import {Card} from 'primereact/card';
import {Dialog} from 'primereact/dialog';
import axios from 'axios';
import {GroupCard} from '../Groups/groupCard'
import TableRow from './TableRow';

export  class listCourses extends Component {

	constructor() {
        super();
        this.state = {
            courses:[],
            breadcrumdItems: [
                {label:'Courses'}
            ],
            dialogVisible: false,
        }
     }

     loadCourses(){
        const endPoint = `http://158.144.43.11:1200/explore/courses?api_call=True`

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
              courses:thisComp.state.courses.concat(responseData.hits.hits)
            })
          }).catch(function(error){
            console.log("error", error)
          })
      }


      componentDidMount(){
        this.setState({
          courses:[]
        })
        this.loadCourses()
      }         


      tabRow(){
             return this.state.courses.map(function(object, i){
                return <div className="p-col-12 p-md-4 p-lg-4"><TableRow obj={object}  key={i} /></div>;
            });
      }
    
    render() {
            const dialogFooter = (
                <Button label="Create" icon="pi pi-user" onClick={() => this.setState({dialogValue:false})} />
            );
        return (
            <div>

                <div className="p-grid">
                    <div className="p-col-12 p-md-9 p-lg-9">
                        <div>
                            <BreadCrumb model={this.state.breadcrumdItems} home={this.state.home} />
                            <p></p>
                        </div>


                        <div className="card card-w-title">
                            <h1>Courses<span className="p-toolbar-group-right">  <Button label="Create" icon="pi pi-plus" style={{marginRight:'.25em'}} onClick={() => this.setState({dialogVisible:true})}/> </span></h1> 
                            
                              <Dialog header="Create a New Course" visible={this.state.dialogVisible} footer={dialogFooter} onHide={() => this.setState({dialogVisible:false})} style={{width: '50vw', height:'28vw'}}>
                                <div className="p-grid">
                                    <div className="p-col-12 p-md-11 p-lg-11">
                                        <InputText placeholder="Enter a Course Name" />
                                    </div>
                                    <div className="p-col-12 p-md-9 p-lg-9">
                                        <InputText placeholder="Enter a Course AltName" />
                                    </div>
                                </div>
                            </Dialog>
  
                            <GroupCard />


                     <div className="p-grid"> 

                          {this.tabRow()}

                         
                      </div>
                        </div>

                    </div>
                    <div className="p-col-12 p-md-3 p-lg-3">

                        <div className="card card-w-title">
                            <h1>Course Name </h1> 
                            <p> Total Courses - 50</p>
                            <p> Total Users - 500</p>
                            <p> Created On - 50</p>
                            <Button label="EDIT" style={{marginRight:'.25em'}} />
                            <Button label="DELETE" style={{marginRight:'.25em'}} />
                            <hr/>
                            <div> <span>COURSES</span> &nbsp;&nbsp;&nbsp;<span>SUB GROUPS</span></div>
                        </div>

                    </div>    
            	}
            </div>
         </div>
        )
    }
}