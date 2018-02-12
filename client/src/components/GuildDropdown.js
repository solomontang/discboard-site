import React, {PureComponent} from 'react';
import {Menu, Dropdown} from 'semantic-ui-react';
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
      text: guild.name
    }
  ))
);

const handleChange = (e,d) => {
  console.log(e,d.value);
}

const GuildDropdown = (props) => (
  <Dropdown
    floating
    options={guildOptions(props.guilds)}
    search
    selection
    placeholder='Select Guild'
    onChange={props.handleChange}
    selectOnNavigation={false}
    value={props.currentGuild.id}
  />
)

export default GuildDropdown