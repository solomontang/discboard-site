import React, { Component } from 'react';
import { Menu, Container, Sidebar, Icon, Segment, Image, Header, Grid, Button } from 'semantic-ui-react';
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

        <Sidebar.Pushable as={Grid} style={{minHeight: '95vh'}}>
          <SidebarContainer/>
          <Sidebar.Pusher>
            <Segment basic>
              {/* <Header as='h3'>Application Content Placeholder</Header> */}
              <AppRoutes />
              {/* <Button onClick={this.toggleVisibility}>Toggle Visibility</Button> */}
              {/* <Image src='/assets/images/wireframe/paragraph.png' /> */}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default App;
