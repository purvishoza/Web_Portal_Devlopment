import React from 'react';
import {Link} from 'react-router-dom';
import { Layout,Menu } from 'antd';
//import logo from '../../kp_logo.jpeg';

//const { Header} = Layout;
const header = () => {
  return(
    <Layout >
    <div>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={['1']}
        className = 'App-header'
      >
        <Menu.Item key="1">
        <Link to = '/'>Home</Link></Menu.Item>
        <Menu.Item key="2">
        <Link to = '/login'>Login</Link></Menu.Item>
      </Menu>
      </div>
    </Layout>
  )}
export default header;
