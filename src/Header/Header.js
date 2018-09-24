import React from 'react';
import {Link} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import { Layout,Menu } from 'antd';
import logo from '../kp_logo.jpeg';

const { Header, Footer, Sider, Content } = Layout;
const header = () => {
  return(
    <Layout >
    <Header className = 'App-header' >
      <Menu
        mode="horizontal"
        defaultSelectedKeys={['1']}
      >
        <Menu.Item key="1">
        <Link to = '/'>Home</Link></Menu.Item>
        <Menu.Item key="2">
        <Link to = 'login'>Login</Link></Menu.Item>
      </Menu>
      </Header>
    </Layout>
  )}
export default header;
