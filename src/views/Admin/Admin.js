import React from 'react';
import { connectApp } from 'ayano-react';
import { Layout, Menu, Icon } from 'antd';
import { Switch, Route } from 'react-router-dom';
const { Sider, Content } = Layout;
import './Admin.scss';
import Posts from '../Posts/Posts.js';

const content = (parent) => {
  return (
  <Switch>
    <Route path={ `${parent}/posts` } component={ Posts } ></Route>
  </Switch>
  )
}

class Admin extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedKey: ""
    }
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.post.posts();
  }

  onSelectMenu({ key }) {
    const { actions, match } = this.props;
    actions.router.replace(`${match.path}${key}`)
    this.setState({
      selectedKey: key
    })
  }

  render() {
    const { selectedKey } = this.state;
    const { match } = this.props;
    return (
      <div className="admin-container">
        <Layout className="full-height" >
          <Sider breakpoint="xs">
            <div className=" custom-menu logo-icon"></div>
            <span className="navi-title custom-menu">功能</span>
            <Menu onSelect={ this.onSelectMenu.bind(this) } selectedKeys={ [ selectedKey ] } >
              <Menu.Item key="/post/create">
                <Icon type="edit"></Icon>
                <span className="nav-text">新建博文</span>
              </Menu.Item>
              <Menu.Item key="/posts">
                <Icon type="file-text"></Icon>
                <span className="nav-text">博文列表</span>
              </Menu.Item>
              <Menu.Item key="/users">
                <Icon type="team"></Icon>
                <span className="nav-text">用户管理</span>
              </Menu.Item>
            </Menu>
            <span className="navi-title custom-menu">设置</span>
            <Menu selectedKeys={ [ selectedKey ] } onSelect={ this.onSelectMenu.bind(this) } >
              <Menu.Item key="/settings">
                <Icon type="setting"></Icon>
                <span className="nav-text">全局设置</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content>
            { content(match.path) }
          </Content>
        </Layout>
      </div>
    )
  }
}

export default connectApp()(Admin);
