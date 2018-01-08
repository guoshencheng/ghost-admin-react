//router components
import React from 'react';
import { Router } from 'ayano-react';
import { Redirect } from 'react-router-dom';
import { matchPath } from 'react-router';
import Login from './views/Login/Login';

const rootRouter = new Router();

rootRouter.use('/', () => {
  return <Redirect to="/login"></Redirect>
}, { exact: true })

rootRouter.use('/login', Login);

export default rootRouter;
