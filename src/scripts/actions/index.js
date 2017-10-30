import * as auth from './auth.js';
import * as post from './post.js';
import * as users from './users.js';
import { routerActions } from 'react-router-redux';
module.exports = {
  auth, router: routerActions, post, users
};
