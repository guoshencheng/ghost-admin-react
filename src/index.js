import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createApp } from 'ayano-react';
import { notification } from 'antd';

import reducers from './scripts/reducers';
import * as actions from './scripts/actions';
import constants from './scripts/constants.js';

import apis from './scripts/apis.js';
import routers from './routers';

import './index.scss';

const app = createApp({ reducers, routers, actions, apis, constants, auto: true, customThunk: true, prefix: "@ayano-react",
  hooks: {
    onRequestError: (error) => {
      if (error.response) {
        const { data = {} } = error.response;
        const { errors } = data;
        errors.forEach(e => {
          notification.error({
            title: '发生错误',
            message: e.message
          })
        })
      } else {
        notification.error({
          title: '发生错误',
          message: error.message
        })
      }
    },
    handleResponse: (response) => {
      return response.data;
    }
  }
});
app.start(document.querySelector('#root'));
