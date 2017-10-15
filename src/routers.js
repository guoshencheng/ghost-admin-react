//router components
import Login from './views/Login/Login';

export default {
  root: {
    path: '/',
    children: {
      login: {
        path: 'login',
        component: Login
      }
    }
  }
}
