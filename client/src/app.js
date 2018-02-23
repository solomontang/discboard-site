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
        
        <MenuContainer style={{height: '5vh'}}/>
        {/* <Container fluid style={{width: '100vw'}}> */}
          <Sidebar.Pushable style={{height: '95vh'}}>
            <SidebarContainer/>
            <Sidebar.Pusher style={{width: 'calc(100vw - 150px)'}}>
              <Grid padded centered stretched style={{height: '95vh'}}>
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
