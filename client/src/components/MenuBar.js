import React, { PureComponent } from 'react';
import {Menu, Responsive, Dropdown, Button, Segment} from 'semantic-ui-react'
import {Link, NavLink, Redirect} from 'react-router-dom'
import '../css/MenuBar.css';
import GuildDropdown from './GuildDropdown';
import GuildDropdownContainer from '../containers/GuildDropdownContainer';

class MenuBar extends PureComponent {

  render() {
    const {guilds, user, selectGuild, currentGuild} = this.props;
    return (
      <Menu inverted secondary borderless color='blue' className='menu-bar'>
        <Menu.Item header>DiscBoard</Menu.Item>
        <Menu.Item as={Link} to='/invite' name='Invite'/>
        <Menu.Item position='right'>
        </Menu.Item>
        <Menu.Item name={user.username} />
        <Menu.Item as={Link} to='/logout' name='Log out'/>
      </Menu>
    )
  }
}

export default MenuBar;