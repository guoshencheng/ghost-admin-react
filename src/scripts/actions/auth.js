import { save } from '../../utils/storage';

export const tokenLogin = (loginInfo) => ({ apis, actions, reducers }) => {
  apis.token(Object.assign({}, loginInfo, {
    client_id: "ghost-admin",
    client_secret: "05f50402afd4",
    grant_type: "password",
  })).then(res => {
    if (res) {
      save('auth', res);
      actions.router.replace('/')
    }
  }).catch(error => {
    console.log(error);
  })
}
