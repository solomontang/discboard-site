import React, {Component} from 'react';
import {Menu, Dropdown} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import '../css/dropdown.css';

const guildIconURL = (guildId, iconHash) => (
  iconHash ? 'https://cdn.discordapp.com/icons/' + guildId + '/' + iconHash + '.png' : null
)

const guildOptions = guilds => (
  guilds.map(guild => (
     {
      key: guild.id,
      // image: {
      //   avatar: true,
      //   src: guildIconURL(guild.id, guild.icon)
      // },
      value: guild.id,
      text: guild.name,
      as: Link,
      to: '/guild/' + guild.id
    }
  ))
);

class GuildDropdown extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, data) {
    this.props.selectGuild(data.value);
  }

  render() {
    const {guilds, currentGuild} = this.props;
    return (
      <Dropdown
        floating
        options={guildOptions(guilds)}
        search
        placeholder='Select Guild'
        onChange={this.handleChange}
        selectOnNavigation={false}
        value={currentGuild.id}
      />
    )
  }
}

export default GuildDropdown