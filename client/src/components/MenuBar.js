import React from 'react';
import {Menu, Responsive} from 'semantic-ui-react'
import {Link, NavLink} from 'react-router-dom'

const items = [
  {as: NavLink, to: '/invite', key: 'Invite', name: 'Invite'},
  {as: NavLink, to: '/manage', key: 'Manage', name: 'Manage'}
]

const MenuBar = (props) => (
  <Menu pointing secondary color='blue' inverted items={items} />
);

export default MenuBar;