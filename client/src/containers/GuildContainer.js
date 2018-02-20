import React, {Component} from 'react';
import {connect} from 'react-redux';

import {selectGuild} from '../actions/guilds';
import Guild from '../components/Guild';

const mapStateToProps = ({currentGuild}) => {
  return {
    currentGuild
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Guild);