import React, { Component } from 'react';
import { Menu, Grid} from 'semantic-ui-react';

import AppRoutes from './components/AppRoutes';
import UploadContainer from './containers/UploadContainer';
import FileContainer from './containers/FileContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu pointing secondary color='blue' inverted />
        
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
