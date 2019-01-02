import './../node_modules/react-push-menu/styles/normalize.css';
import './../node_modules/react-push-menu/styles/component.css';
import './demo.css';
// import '../styles/icons.css';

import React from 'react'
import {render} from 'react-dom';
import PushMenu from '../../node_modules/react-push-menu/src/index'
import {FaBars, FaChevronRight, FaChevronLeft} from 'react-icons/fa';

import Link from './LinkComponent';

class Page extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      menu: {
        header: 'All Categories',
        children: [
          {
            name: 'About',
            id: 1,
            link: '/about',
            children: [
              {name: 'Mission', id: 11, link: null, children: []},
              {name: 'Objectives', id: 12, link: null, children: []},
              {
                name: 'Goals',
                id: 13,
                link:
                '/about/goals',
                children: [
                  {name: 'Charity', id: 131, link: null, children: []},
                  {name: 'Clean Environment Plan', id: 132, link: null, children: []},
                ]
              }
            ]
          },
          {name: 'Services', id: 2, link: '/services', children: []},
          {name: 'People', id: 3, link: '/people', children: []},
          {name: 'Careers', id: 4, link: '/careers', children: []},
          {name: 'Contact', id: 5, link: null, children: []},
        ]
      }
    }
  }
  render(){
    return (
      <PushMenu
        backIcon={<FaChevronLeft />}
        expanderComponent={FaChevronRight}
        onNodeClick={(e, {menu, node}) => {
          console.log(node)
          menu.tools.reset();
        }}
        linkComponent={Link}
        isOpen={false}
        nodes={this.state.menu}
        type={'cover'}
        propMap={{url: 'link'}}>

        <div className="rpm-trigger" id="rpm-trigger" >
          <FaBars />
        </div>

      </PushMenu>
    );
  }
}



export default Page;
