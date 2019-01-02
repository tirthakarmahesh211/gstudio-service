import React, {Component} from 'react';
import axios from 'axios';

import {Dialog} from 'primereact/dialog';
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import {InputTextarea} from 'primereact/inputtextarea';
import {Dropdown} from 'primereact/dropdown';

export default class CreatePage extends Component {
        
    constructor() {
        super();
        this.state = {
            visible: false,
            name: '',
            content_org: '',
            alt_name:'',
            lang: '',
            api_call: true,
            group_id: 'home',
            created_by: 13988

        };
        this.onClick = this.onClick.bind(this);
        this.onHide = this.onHide.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onLangChange = this.onLangChange.bind(this);
        this.onAltNameChange = this.onAltNameChange.bind(this);
        this.onContentChange = this.onContentChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onClick(event) {
        this.setState({visible: true});
    }

    onHide(event) {
        this.setState({visible: false});
    }
    onNameChange(event){
        this.setState({name: event.target.value})
    }

    onAltNameChange(event){
        this.setState({alt_name: event.target.value})
    }

    onLangChange(event) {
        this.setState({lang: event.value});
    }

    onContentChange(event){
        this.setState({content_org: event.target.value})
    }

    onSubmit(event) {
        event.preventDefault();

        console.log(`name is ${this.state.name} and Alt Name is ${this.state.alt_name} also content is ${this.state.content_org} also lang is ${this.state.lang.name}`);
        const pageinfo = {
            name: this.state.name,
            alt_name: this.state.alt_name,
            content_org: this.state.content_org,
            lan: this.state.lang,
            api_call: true,
            group_id: 'home',
            created_by: 13988
        }

        axios.post(`http://localhost:7000/create_or_update_page/`, pageinfo)
            .then(response => console.log(response.data));

        this.setState({
            name: '',
            alt_name: '',
            content_org: '',
            lang:'',
            api_call: true,
            group_id: 'home',
            created_by: 13988
        })
                this.setState({visible: false});
     
    }

    render() {

         const langs = [
            {name: 'English', code: 'EN'},
            {name: 'Hindi', code: 'HI'},
            {name: 'Telugu', code: 'TE'},           
        ];

        const footer = (
            <div>
                <Button label="Create" icon="pi pi-check" onClick={this.onSubmit} />
                <Button label="Cancel" icon="pi pi-times" onClick={this.onHide} className="p-button-secondary" />
            </div>
        );

        return (
            <div>

                <div className="content-section introduction">
                    <div className="feature-intro">

                        <p>List of Pages </p>
                        <span>  <Button label="Add New Page" icon="pi pi-external-link" onClick={this.onClick} /></span>
                     
                    </div>
                </div>

                <div className="content-section implementation">

                    <Dialog header="Add Page" visible={this.state.visible} style={{width: '50vw'}} footer={footer} onHide={this.onHide} maximizable>
                      <div className="p-float-label p-col-12 p-md-8">
                            <InputText id="float-input" type="text" size="30" value={this.state.name} onChange={this.onNameChange} />
                            <label htmlFor="float-input">Name</label>
                      </div>
                       <div className="p-float-label p-col-12 p-md-8">
                            <InputText id="float-input" type="text" size="30" value={this.state.alt_name} onChange={this.onAltNameChange} />
                            <label htmlFor="float-input"> Alt Name</label>
                      </div>
                       <div className="p-col-12 p-md-8">
                             <InputTextarea  id="float-input" rows={5} cols={30} autoResize={true} placeholder="content" value={this.state.content_org} onChange={this.onContentChange}></InputTextarea>
                      </div>
                       <div className="p-col-12 p-md-8">
                            <Dropdown value={this.state.lang} options={langs} onChange={this.onLangChange} style={{width:'150px'}} placeholder="Select a Language" optionLabel="name"/>
                            <div style={{marginTop: '.5em'}}>{this.state.lang ? 'Selected Lang: ' + this.state.lang.name : 'No lang selected'}</div>    
                        </div> 
                   </Dialog>
                    </div>
            </div>
        )
    }
}
