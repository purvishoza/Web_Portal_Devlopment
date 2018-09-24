import React from 'react';
import {Link} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import { Layout } from 'antd';
import logo from '../kp_logo.jpeg';

const { Header, Footer, Sider, Content } = Layout;
const header = (props) =>
{
  return (
    <div >
    <Layout>
      <Header className = 'App-header'>TPMG Insights
      <BrowserRouter><Link to = '#' className = 'Link'>logout</Link></BrowserRouter>
      <img src = {logo} className='Logo' />
      </Header>
    </Layout>
    </div>
  );
}

export default header;
