import React from 'react';
import 'antd/dist/antd.css';
import '../index';
import { Breadcrumb, Layout } from 'antd';
import ContentComp from './Content';

const { Header, Content, Footer } = Layout;

const LayoutComp = () => (
  <Layout className="layout">
    <Header>
      <div className="logo" >Visitor Office</div>
    </Header>
    <Content
      style={{
        padding: '0 50px',
      }}
    >
      <Breadcrumb
        style={{
          margin: '16px 0',
        }}
      >
        {/* <Breadcrumb.Item>Home</Breadcrumb.Item> */}
      </Breadcrumb>
      <div className="site-layout-content">
        <ContentComp />
      </div>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
);

export default LayoutComp;