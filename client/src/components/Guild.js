import React, { PureComponent } from 'react';
import { Grid } from 'semantic-ui-react'
import GuildManager from './GuildManager'
import NotFound from './NotFound';

class Guild extends PureComponent {

  render() {
    const { currentGuild, guilds } = this.props;

    return (
      <Grid.Column>
        {guilds[currentGuild.id] ? <GuildManager guild={guilds[currentGuild.id]}/> : <NotFound />}
      </Grid.Column>
    )
  }
}

export default Guild;