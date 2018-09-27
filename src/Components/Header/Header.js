import React from 'react';
import {Link} from 'react-router-dom';
import logo from './kp_logo1.png';

import { Navbar, Nav, NavItem , MenuItem, NavDropdown} from 'react-bootstrap';

const header = () => {
  /*  <Layout >
      <Menu
        mode="horizontal"
        defaultSelectedKeys={['1']}
   className = 'App-header'
      >
      <img src = {logo} alt = 'kaiser logo' className = 'Logo'/>
        <Menu.Item key="1">
        <Link to = '/'>Home</Link></Menu.Item>
        <Menu.Item key="2">
        <Link to = '/users'>Users</Link></Menu.Item>

      </Menu>
    </Layout> */
  return(

    <Navbar className='App-header'>
    <Navbar.Header>
      <Navbar.Brand>
        <img src={logo} alt = 'kaiser logo' className = 'Logo' />
      </Navbar.Brand>
    </Navbar.Header>
    <p className='align1'>TPMG Insights</p>
    <Nav className = 'got'>
      <NavItem eventKey={1} >
        <Link to = '/' className='colors'>Home</Link>
      </NavItem>
      <NavItem eventKey={2} >
      <Link to = '/users' className='colors'>Users</Link>
      </NavItem>
    </Nav>
  </Navbar>
  )}
export default header;
