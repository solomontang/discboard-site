import React, { PureComponent } from 'react';

class Guild extends PureComponent {

  // componentWillMount() {
  //   this.setGuildValidFlag(this.props.guilds);
  // }

  // componentWillReceiveProps(nextProps) {
  //   this.setGuildValidFlag(nextProps.guilds);
  // }

  // setGuildValidFlag(guilds) {
  //   this.setState({
  //     valid: guilds.reduce((flag, guild) => {
  //       return flag || guild.id === this.props.match.params.id;
  //     }, false)
  //   })
  // }

  render() {
    const { currentGuild, guilds } = this.props;
    
    return (
      <h1>
        {guilds[currentGuild.id].name}
      </h1>
    )
  }
}

export default Guild;