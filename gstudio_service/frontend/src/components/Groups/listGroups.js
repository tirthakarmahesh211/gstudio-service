import React, {Component} from 'react';
import {Panel} from 'primereact/panel';
import {PanelsDemo} from './../PanelsDemo';
import {BreadCrumb} from 'primereact/breadcrumb';
import {InputText} from 'primereact/inputtext';
import {Toolbar} from 'primereact/toolbar';
import {Button} from 'primereact/button';
import {Card} from 'primereact/card';
import {Dialog} from 'primereact/dialog';

import {GroupCard} from './groupCard'


export class listGroups extends Component {
     
     constructor() {
        super();
        this.state = {
            breadcrumdItems: [
                {label:'Groups'}
            ],
            dialogVisible: false,
        }
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
                            <h1>Groups <span className="p-toolbar-group-right">  <Button label="Create" icon="pi pi-plus" style={{marginRight:'.25em'}} onClick={() => this.setState({dialogVisible:true})}/> </span></h1> 
                            
                              <Dialog header="Create a New Group" visible={this.state.dialogVisible} footer={dialogFooter} onHide={() => this.setState({dialogVisible:false})} style={{width: '50vw', height:'28vw'}}>
                                <div className="p-grid">
                                    <div className="p-col-12 p-md-11 p-lg-11">
                                        <InputText placeholder="Enter a Group Name" />
                                    </div>
                                    <div className="p-col-12 p-md-9 p-lg-9">
                                        <InputText placeholder="Enter a Group AltName" />
                                    </div>
                                </div>
                            </Dialog>
  
                            <GroupCard />
                        </div>

                    </div>
                    <div className="p-col-12 p-md-3 p-lg-3">

                        <div className="card card-w-title">
                            <h1>Group Name </h1> 
                            <p> Total Courses - 50</p>
                            <p> Total Users - 500</p>
                            <p> Created On - 50</p>
                            <Button label="EDIT" style={{marginRight:'.25em'}} />
                            <Button label="DELETE" style={{marginRight:'.25em'}} />
                            <hr/>
                            <div> <span>COURSES</span> &nbsp;&nbsp;&nbsp;<span>SUB GROUPS</span></div>
                        </div>

                    </div>    
            </div>
         </div>
        )
    }
}                  