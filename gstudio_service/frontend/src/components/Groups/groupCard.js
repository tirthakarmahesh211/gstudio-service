import React, {Component} from 'react';
import {Card} from 'primereact/card';
import {Button} from 'primereact/button';

export class GroupCard extends Component {

    render() {
        const header = (
            <img alt="Card" src='assets/layout/images/metastudio-logo.png'/>
        );
        const footer = (
            <span>
                <Button label="Edit" icon="pi pi-check"/>
                <Button label="Delete" icon="pi pi-times" className="p-button-danger"/>
            </span>
        );

        return (
            <div>
                <div className="content-section implementation flexgrid-demo">
                    <br/><br/>
                    <div className="p-grid">
                        <div className="p-col-12 p-md-6 p-lg-4">
                             <Card title="Group 1" subTitle="Subtitle"  className="ui-card-shadow" footer={footer} header={header}>
                                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                                </div>
                            </Card>
                        </div>
                        <div className="p-col-12 p-md-6 p-lg-4">
                            <Card title="Group 2" subTitle="Subtitle"  className="ui-card-shadow" footer={footer} header={header}>
                                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                                </div>
                            </Card>
                        </div>
                        <div className="p-col-12 p-md-6 p-lg-4">
                            <Card title="Group 3" subTitle="Subtitle"  className="ui-card-shadow" footer={footer} header={header}>
                                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
