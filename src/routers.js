//router components
import Login from './views/Login/Login';
import { Redirect } from 'react-router-dom';

export default {
  root: {
    path: '/',
    children: {
      root: {
        path: '',
        exact: true,
        render: () => {
          return <Redirect to="/login"/>
        }
      },
      login: {
        path: 'login',
        component: Login
      }
    }
  }
}
