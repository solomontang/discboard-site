import React, { PureComponent } from 'react';
import { Sidebar, Menu, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class GuildSidebar extends PureComponent {
  constructor(props){
    super(props);
    this.guildList = this.guildList.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, data) {
    this.props.selectGuild(data.to.substring(7,25));
  }

  guildList() {
    const { guilds } = this.props;
    
    return Object.values(guilds).map(guild => {
      return (
        <Menu.Item as={NavLink} to={`/guild/${guild.id}`} name={guild.name} key={guild.id} onClick={this.handleClick}/>
      )
    })
  }

  render() {
    return (
      <Sidebar as={Menu} animation='push' width='thin' visible={true} icon='labeled' vertical>
        <Menu.Header name='guilds'>
          <Icon name='shield' />
          Guilds
        </Menu.Header>
        {this.guildList()}
      </Sidebar>
    )
  }
}

export default GuildSidebar;