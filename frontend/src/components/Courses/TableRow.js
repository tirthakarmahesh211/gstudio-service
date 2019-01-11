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
          
              <Card title={this.props.obj._source.altnames} subTitle={this.props.obj._source.educationalsubject} style={{width: '250px', height: '300px'}} className="ui-card-shadow" footer={footer} header={header}>
              {/*<div dangerouslySetInnerHTML ={{__html: this.props.obj._source.content}}></div>*/}
        </Card>
        
  
      );
  }
}

export default TableRow;