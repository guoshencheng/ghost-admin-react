import React from 'react';
import { Form, Button, Input, Icon } from 'antd';
import { connectAyano } from 'ayano-react';
import './Login.less';

const FormItem = Form.Item;

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  onSubmit() {
    const { actions, form } = this.props;
    const fields = form.getFieldsValue();
    actions.auth.login(fields)
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-container">
        <Form className="login-form">
          <FormItem>
            {getFieldDecorator('username', {
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
          <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.onSubmit.bind(this)}>
              Log in
          </Button>
        </Form>
      </div>
    )
  }
}

export default connectAyano()(Form.create()(Login));
