import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from  'moment'

export default class NextBirthday extends Component {
    render() {
        console.log(this.props.date)
    var date = moment(this.props.date)
    var next = date.fromNow(); 
    return (
      <span>{next}</span>
    )
  }
}
 
NextBirthday.propTypes = {
  date: PropTypes.string.isRequired
}