import React, { PureComponent } from 'react';
import GuildManager from './GuildManager'
import NotFound from './NotFound';

class Guild extends PureComponent {

  render() {
    const { currentGuild, guilds } = this.props;

    return (
      <div>
        {guilds[currentGuild.id] ? <GuildManager guild={guilds[currentGuild.id]}/> : <NotFound />}
      </div>
    )
  }
}

export default Guild;