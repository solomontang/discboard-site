import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { selectGuild } from '../actions/guilds';
import GuildSidebar from '../components/GuildSidebar';

const mapStateToProps = ({guilds}) => {
  return {
    guilds
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectGuild: (id) => {
      dispatch(selectGuild(id));
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GuildSidebar));