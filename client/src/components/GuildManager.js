import React, { PureComponent } from 'react';
import { Menu, Segment, Grid } from 'semantic-ui-react';
import { NavLink, withRouter, Route } from 'react-router-dom';

import UploadContainer from '../containers/UploadContainer';
import Placeholder from './Placeholder';

class GuildManager extends PureComponent {

  render() {
    const { match, guild } = this.props;
    return (
      <Grid.Column>
        <h1> {guild.name} </h1>
        <Menu pointing secondary>
          <Menu.Item as={NavLink} to={`${match.url}/manage`} name='manage'/>
          <Menu.Item as={NavLink} to={`${match.url}/upload`} name='upload'/>
        </Menu>

          <Route path={`${match.path}/manage`} component={Placeholder}/>
          <Route path={`${match.path}/upload`} component={UploadContainer}/>
      </Grid.Column>
    )
  }
}

export default withRouter(GuildManager);