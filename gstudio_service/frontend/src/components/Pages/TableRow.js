import React, { Component } from 'react';
import './../../layout/style/custom.css';
import {Card} from 'primereact/card';
import {Button} from 'primereact/button';

class TableRow extends Component {
  render() {

            const header = (
                {/*<img alt="Card" src={this.props.obj._source.if_file.mid.relurl}/>*/},
                <img alt="Card" src="https://material-ui-next.com/static/images/cards/contemplative-reptile.jpg"/>
            );
           const footer = (
                <p>Source</p>
            );

    return (

                <div className="p-col-6 p-md-6 p-lg-3">

                   <Card title={this.props.obj._source.name} subTitle={this.props.obj._source.educationalsubject} style={{width: '200px'}} className="ui-card-shadow" footer={footer} header={header}>
                        {/*<div dangerouslySetInnerHTML ={{__html: this.props.obj._source.content}}></div>*/}
        </Card>
        
        </div>
  
      );
  }
}

export default TableRow;