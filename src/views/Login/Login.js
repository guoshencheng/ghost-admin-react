import React from 'react';
import { connectAyano } from 'ayano-react';
import './Login.less';

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="login-container">

      </div>
    )
  }
}

export default connectAyano()(Login);
