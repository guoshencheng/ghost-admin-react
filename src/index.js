import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Toast, Popup } from 'antd-mobile';
import { createApp } from 'ayano-react';

//redux actions and reducers
import reducers from './scripts/reducers';
import * as actions from './scripts/actions';

// NEW FEATURE: this is deprecated with option auto true and object type reducer
console.warn(` ayano-REACT!!! NEW FEATURE: src/index.js line 12 deprecated with option auto true and object type reducer`);
import constants from './scripts/constants.js';

// api routers define
import apis from './scripts/apis.js';
import routers from './routers';

import './index.scss';

const app = createApp({ reducers, routers, actions, apis, constants, auto: true, customThunk: true, prefix: "@ayano-react" });
console.log(app)
app.start(document.querySelector('#root'));
