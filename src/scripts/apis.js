import { methods } from 'ayano-react';
import { get } from '../utils/storage';

let apis = {
  token: {
    path: '/ghost/api/v0.1/authentication/token',
    method: methods.post,
  },
  repo: {
    path: '/repos/guoshencheng/ayano',
    method: methods.get
  },
  posts: {
    path: '/ghost/api/v0.1/posts',
    method: methods.get,
    headers: () => ({
      authorization: get('auth') && `${get('auth').token_type} ${get('auth').access_token}`
    })
  }
}

export default apis;
