import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from  'moment'

export default class Date extends Component {
    render() {
    var date = moment(this.props.date).fromNow(); 
    return (
        <span>{date}</span>
    )
  }
}
 
Date.propTypes = {
  date: PropTypes.string.isRequired
}