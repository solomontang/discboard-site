import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {selectGuild} from '../actions/guilds';
import GuildDropdown from '../components/GuildDropdown';

const mapStateToProps = ({guilds, currentGuild}) => {
  return {
    guilds,
    currentGuild
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectGuild: (id) => {
      dispatch(selectGuild(id));
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GuildDropdown));