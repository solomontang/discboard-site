import React, { Component } from 'react';
import { Menu, Grid, Button} from 'semantic-ui-react';
// import TaskContainer from './containers/TaskContainer';
import UploadContainer from './containers/UploadContainer';
import FileContainer from './containers/FileContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu pointing secondary color='blue' inverted />
        <Grid centered padded stackable>
          
          <Grid.Column mobile={16} tablet={12} computer={12}>
              <h1>Clips
                {/* <Button size='mini' content='Save' floated='right' color='green' disabled={true}/>
                <Button size='mini' content='Add Clips' floated='right'/> */}
              </h1>
              <UploadContainer />
              {/* <FileContainer /> */}
              {/* <TaskContainer /> */}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
