
import { methods } from 'ayano-react';

let apis = {
  token: {
    method: '/ghost/api/v0.1/authentication/token',
    method: methods.post
  },
  repo: {
    path: '/repos/guoshencheng/ayano',
    method: methods.get
  }
}

apis.host = 'https://blog.maihaoche.com';

export default apis;
