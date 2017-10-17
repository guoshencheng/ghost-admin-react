import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createApp } from 'ayano-react';

import reducers from './scripts/reducers';
import * as actions from './scripts/actions';
import constants from './scripts/constants.js';

import apis from './scripts/apis.js';
import routers from './routers';

import './index.scss';

const app = createApp({ reducers, routers, actions, apis, constants, auto: true, customThunk: true, prefix: "@ayano-react" });
app.start(document.querySelector('#root'));
