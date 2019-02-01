import React, { Component } from 'react';
import './../../layout/style/custom.css';
import {Card} from 'primereact/card';
import {Button} from 'primereact/button';

import { Link } from "react-router-dom";


class TableRow extends Component {

  handleClick(name, e){
    alert(name)
  }
  render() {

            const header = (
                {/*<img alt="Card" src={this.props.obj._source.if_file.mid.relurl}/>*/},
                <img alt="Card" src="https://material-ui-next.com/static/images/cards/contemplative-reptile.jpg"/>
            );
           const footer = (
                <p>Source</p>
            );

    return (
          
        <Card title={this.props.obj._source.name} subTitle={this.props.obj._source.educationalsubject} style={{width: '250px', height: '300px'}} className="ui-card-shadow" footer={footer} header={header} data-id={this.props.obj._source.name} onClick={this.handleClick.bind(this.props.obj._source.name)}>
              {/*<div dangerouslySetInnerHTML ={{__html: this.props.obj._source.content}}></div>*/}

              <Link to={`{/pages/${this.props.obj._source.name}`}/>
        </Card>
        
  
      );
  }
}

export default TableRow;