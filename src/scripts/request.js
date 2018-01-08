
import { methods, Request } from 'ayano-react';

let apis = {
  user: {
    path: (data) => `/users/${data.id}`,
    searchParamsBuilder: () => null,
    method: methods.get
  },
  login: {
    path: '/authentication/token',
    method: methods.post
  },
}

var request = new Request({
  baseURL: 'https://git.dawanju.net/api/v4',
  apis,
  headers: {'Server-Origin': 'foobar'}
})

export default request;
