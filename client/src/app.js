import React, { Component } from 'react';
import { Menu, Container, Sidebar, Segment, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import AppRoutes from './components/AppRoutes';
import MenuContainer from './containers/MenuContainer';
import SidebarContainer from './containers/SidebarContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    }
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
     this.setState({ visible: !this.state.visible })
  };

  render() {
    return (
      <div className="App">
        
        <MenuContainer style={{minHeight: '5vh'}}/>
        {/* <Container fluid style={{width: '100vw'}}> */}
          <Sidebar.Pushable style={{minHeight: '95vh'}}>
            <SidebarContainer/>
            <Sidebar.Pusher>
              <Grid attached='bottom' padded style={{width: 'calc(100% - 150px)'}}>
                <AppRoutes />
              </Grid>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        {/* </Container> */}
      </div>
    );
  }
}

export default App;
