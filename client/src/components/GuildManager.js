import React, { PureComponent } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { NavLink, withRouter, Route } from 'react-router-dom';

import UploadContainer from '../containers/UploadContainer';
import Placeholder from './Placeholder';

class GuildManager extends PureComponent {

  render() {
    const { match, guild } = this.props;
    return (
      <div>
        <h1> {guild.name} </h1>
        <Menu pointing secondary>
          <Menu.Item as={NavLink} to={`${match.url}/manage`} name='manage'/>
          <Menu.Item as={NavLink} to={`${match.url}/upload`} name='upload'/>
        </Menu>

        <Segment>
          <Route path={`${match.path}/manage`} component={Placeholder}/>
          <Route path={`${match.path}/upload`} component={UploadContainer}/>
        </Segment>
      </div>
    )
  }
}

export default withRouter(GuildManager);