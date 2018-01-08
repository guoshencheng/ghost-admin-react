import React from 'react';
import { Form, Button, Input, Icon } from 'antd';
import { connectAyano } from 'ayano-react';
import './Login.less';

const FormItem = Form.Item;

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-container">
        <Form className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
          </Button>
        </Form>
      </div>
    )
  }
}

export default connectAyano()(Form.create()(Login));
