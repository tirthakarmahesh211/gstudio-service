import React, { Component } from 'react';
import './../../layout/style/custom.css';
import {Card} from 'primereact/card';
import {Button} from 'primereact/button';


class TableRow extends Component {
  render() {

            const header = (
                <img alt="Card" src={this.props.obj._source.if_file.mid.relurl}/>
            );
           const footer = (
                <p>Source</p>
            );

    return (
      <div className="content-section implementation">

        <Card title={this.props.obj._source.name} subTitle={this.props.obj._source.educationalsubject} style={{width: '360px'}} className="ui-card-shadow" footer={footer} header={header}>
                        <div>{this.props.obj._source.content}</div>
        </Card>
        <br/>
      </div>  
      );
  }
}

export default TableRow;