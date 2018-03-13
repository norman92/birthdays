import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from  'moment'

export default class NextBirthday extends Component {
    render() {
    var date = moment(this.props.date)
    var currentYear = moment().year()
    console.log(currentYear)
    console.log(date.month())
    console.log(date.date())
    var next = moment([currentYear, date.month(), date.date()])

    if (next.isBefore(moment()))
    {
      next.add(1, 'y')
    }

    console.log(date.format());
    console.log(next.format());

    return (
      <span>{next.fromNow()}</span>
    )
  }
}
 
NextBirthday.propTypes = {
  date: PropTypes.string.isRequired
}