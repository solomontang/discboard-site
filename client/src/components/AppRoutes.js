import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import UploadContainer from '../containers/UploadContainer';
import GuildContainer from '../containers/GuildContainer';
import NotFound from './NotFound';
import Home from './Home';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  // {
  //   path: '/guild/:id/upload',
  //   component: UploadContainer,
  //   exact: true
  // },
  {
    path: '/logout',
    component: () => window.location = '/logout',
    exact: true
  },
  {
    path: '/guild/:id',
    component: GuildContainer,
    exact: true
  },
  {
    path: '/*',
    component: NotFound
  }
]

const AppRoutes = (props) => (
  <Switch>
    {routes.map((route, index) => {
      return <Route 
        exact={route.exact}
        path={route.path}
        component={route.component}
        key={route.path}
      />}
    )}
  </Switch>
);

export default AppRoutes;