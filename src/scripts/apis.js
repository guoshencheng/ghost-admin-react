
import { methods } from 'ayano-react';

let apis = {
  token: {
    path: '/ghost/api/v0.1/authentication/token',
    method: methods.post,
  },
  repo: {
    path: '/repos/guoshencheng/ayano',
    method: methods.get
  }
}

console.log(apis)

export default apis;
