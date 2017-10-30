import { connectApp } from 'ayano-react';
import { Row, Col, Button, Layout, Menu } from 'antd';
import React from 'react';
import './Users.scss'

class Users extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  componentDidMount() {
    const { actions } = this.props;
    actions.users.invitedUsers();
  }
  render() {
    return (
      <div className="user-list">
        <div className="invite-users"></div>
        <div className="invited-users"></div>
      </div>
    )
  }
}

const mapStateToAction = (state) => ({
  users: state.users.list
})

export default connectApp(mapStateToAction)(Users);
