import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from  'moment'

export default class NextBirthday extends Component {
    render() {
    var date = moment(this.props.date)
    var currentYear = moment().year()
    var next = moment([currentYear, date.month(), date.date()])

    if (next.isBefore(moment()))
    {
      next.add(1, 'y')
    }

    return (
      <span>{next.fromNow()}</span>
    )
  }
}
 
NextBirthday.propTypes = {
  date: PropTypes.string.isRequired
}