console.log(DEFINE_VALUE)
const ghostConfig = DEFINE_VALUE.ghost;
const { client_id, client_secret, grant_type } = ghostConfig;

export const login = ({ username, password }) => ({ apis }) => {
  apis.login({ client_id, client_secret, grant_type, username, password }).then(response => {
    console.log(response);
  })
}
