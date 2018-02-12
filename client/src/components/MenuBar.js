import React, { PureComponent } from 'react';
import {Menu, Responsive, Dropdown, Button, Segment} from 'semantic-ui-react'
import {Link, NavLink, Redirect} from 'react-router-dom'

import GuildDropdown from './GuildDropdown';

class MenuBar extends PureComponent {
  constructor(props){
    super(props)
  }

  render() {
    const {guilds, user, selectGuild,currentGuild} = this.props;
    return (
      <Menu inverted pointing secondary color='blue'>
        <Menu.Item header>DiscBoard</Menu.Item>
        <Menu.Item as={Link} to='/invite' name='Invite'/>
        <Menu.Item as={Link} to='/manage' name='manage'/>
        <Menu.Item position='right'>
          <GuildDropdown guilds={guilds} handleChange={selectGuild} currentGuild={currentGuild}/>
        </Menu.Item>
        <Menu.Item as={Link} to='/profile' name={user.username} />
        <Menu.Item as={Link} to='/logout' name='Log out'/>
      </Menu>
    )
  }
}

export default MenuBar;