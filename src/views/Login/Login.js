import React from 'react';
import './Login.scss';
import { connectApp } from 'ayano-react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  handleSubmit(e) {
    const { actions } = this.props;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        actions.auth.tokenLogin(values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <table className="center-table">
        <tbody>
          <tr>
            <td>
            <div className="login-container">
              <Form onSubmit={ this.handleSubmit.bind(this) } className="login-form">
                <FormItem>
                {
                  getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })(
                    <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                  )
                }
                </FormItem>
                <FormItem>
                {
                  getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                  )
                }
                </FormItem>
                <FormItem>
                {
                  getFieldDecorator('remember', {
                    valuePropName: 'checked', initialValue: true,
                  })(
                    <Checkbox>Remember me</Checkbox>
                  )
                }
                  <Button type="primary" htmlType="submit" className="login-form-button"> Log in </Button>
                </FormItem>
              </Form>
            </div>
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}

const LoginForm = Form.create()(Login);

export default connectApp()(LoginForm);
