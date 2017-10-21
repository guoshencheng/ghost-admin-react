import React from 'react';
import { connectApp } from 'ayano-react';
import { Layout, Menu, Icon } from 'antd';
const { Sider, Content } = Layout;
import './Admin.scss';

class Admin extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="admin-container">
        <Layout>
          <Sider breakpoint="xs">
            <div className="logo-icon custom-menu"></div>
            <span className="navi-title custom-menu">功能</span>
            <Menu>
              <Menu.Item>
                <Icon type="edit"></Icon>
                <span className="nav-text">新建博文</span>
              </Menu.Item>
              <Menu.Item>
                <Icon type="file-text"></Icon>
                <span className="nav-text">博文列表</span>
              </Menu.Item>
              <Menu.Item>
                <Icon type="team"></Icon>
                <span className="nav-text">用户管理</span>
              </Menu.Item>
            </Menu>
            <span className="navi-title custom-menu">设置</span>
            <Menu>
              <Menu.Item>
                <Icon type="setting"></Icon>
                <span className="nav-text">全局设置</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content>content</Content>
        </Layout>
      </div>
    )
  }
}

export default Admin;
