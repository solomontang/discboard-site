import React from 'react';
import {Route, Switch} from 'react-router-dom';

import UploadContainer from '../containers/UploadContainer';
import NotFound from './NotFound';
import Home from './Home';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/manage/',
    component: UploadContainer
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
        exact path={route.path}
        component={route.component}
        key={route.path}
      />}
    )}
  </Switch>
);

export default AppRoutes;