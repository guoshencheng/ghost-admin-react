//router components
import Login from './views/Login/Login';
import Admin from './views/Admin/Admin';
import { get } from './utils/storage';
import { Redirect } from 'react-router-dom';

export default {
  root: {
    path: '/',
    children: {
      root: {
        path: '',
        exact: true,
        render: () => {
          const auth = get('auth');
          if (!auth) {
            return <Redirect to="/login"/>
          } else {
            return <Redirect to="/admin"/>
          }
        }
      },
      login: {
        path: 'login',
        component: Login
      },
      admin: {
        path: 'admin',
        component: Admin
      }
    }
  }
}
