import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Date from './date' 
import NextBirthday from './nextBirthday'

export default class BirthdayList extends Component {
  render() {
    return (
      <ul>
        {this.props.birthdays.map((birthday, i) => 
            <li key={i}>{birthday.name}. 
                Age: <Date date={birthday.date} />. 
                Next birthday  <NextBirthday date={birthday.date} />
            </li>)}
      </ul>
    )
  }
}
 
BirthdayList.propTypes = {
  birthdays: PropTypes.array.isRequired
}