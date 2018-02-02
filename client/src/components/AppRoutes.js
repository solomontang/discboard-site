import React from 'react';
import {Route, Switch} from 'react-router-dom';

import UploadContainer from '../containers/UploadContainer';

const routes = [
  {
    path: '/',
    component: UploadContainer
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