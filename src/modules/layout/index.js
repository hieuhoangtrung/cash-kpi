import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import Chart from '../chart';
import Table from '../table';

const { Header, Content, Footer } = Layout;
const img = require('../../resources/img/logo_vertical.png');

const DefaultLayout = () => (
  <Layout className="layout">
    <Header>
      <div className="logo">
        <img alt="logo" src={img} height={50} width={120} />
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">CashFlow Forecast</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>CashFlow Forecast</Breadcrumb.Item>
      </Breadcrumb>
      <Chart />
      <Table />
    </Content>
    <Footer style={{ textAlign: 'center' }}>Peter Hoang © 2019 - Cash KPI</Footer>
  </Layout>
);

export default DefaultLayout;
