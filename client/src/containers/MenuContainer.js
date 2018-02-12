import React, {Component} from 'react'
import { connect } from 'react-redux';

import {selectGuild} from '../actions/guilds';
import MenuBar from '../components/MenuBar';

const mapStateToProps = ({user, guilds, currentGuild}) => {
  return {
    user,
    guilds,
    currentGuild
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectGuild: (e, data) => {
      dispatch(selectGuild(e, data));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
