import React, { Component } from 'react';
import { Menu, Grid} from 'semantic-ui-react';

import AppRoutes from './components/AppRoutes';
import MenuContainer from './containers/MenuContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <MenuContainer />
        <Grid centered padded stackable>
          <Grid.Column mobile={16} tablet={12} computer={12}>
            <AppRoutes/>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
