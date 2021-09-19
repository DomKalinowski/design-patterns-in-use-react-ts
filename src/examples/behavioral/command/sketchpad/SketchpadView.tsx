import React, {useState} from 'react';
import {Breadcrumb, Layout, Menu} from 'antd';
import {MenuFoldOutlined, MenuUnfoldOutlined,} from '@ant-design/icons';

const {Header, Sider, Content} = Layout;
const {SubMenu} = Menu;

const menu = (
  <Menu>
    <Menu.Item>
      Creational Patterns
    </Menu.Item>
    <Menu.Item>
      Structural Patterns
    </Menu.Item>
  </Menu>
);

export const SketchpadView = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout id="components-layout-demo-custom-trigger">
      <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
        <div className="logo"/>
        <Menu
          mode="inline"
          defaultSelectedKeys={['3']}
          defaultOpenKeys={['sub4']}
        >
          <SubMenu key="sub1" title="Creational Patterns">
          </SubMenu>
          <SubMenu key="sub2" title="Structural Patterns">
          </SubMenu>
          <SubMenu key="sub4" title="Behavioral Patterns">
            <Menu.ItemGroup key="g2" title="Command">
              <Menu.Item key="3">Sketchpad</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{padding: 0}}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
          <Breadcrumb style={{display: 'inline-block'}}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
              Design Patterns in Use
            </Breadcrumb.Item>
            <Breadcrumb.Item overlay={menu}>
              Behavioural Patterns
            </Breadcrumb.Item>
            <Breadcrumb.Item>Command</Breadcrumb.Item>
            <Breadcrumb.Item>Sketchpad</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};