import React, { Component } from 'react'
import PropTypes from 'prop-types'
 
export default class BirthdayList extends Component {
  render() {
    return (
      <ul>
        {this.props.birthdays.map((birthday, i) => <li key={i}>{birthday.name}</li>)}
      </ul>
    )
  }
}
 
BirthdayList.propTypes = {
  birthdays: PropTypes.array.isRequired
}