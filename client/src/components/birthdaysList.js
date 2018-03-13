import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Date from './date' 
import NextBirthday from './nextBirthday'

export default class BirthdayList extends Component {
  render() {
    return (
      <div>
        {this.props.birthdays.map((birthday, i) => 
            <p key={i}>{birthday.name}. 
                Age: <Date date={birthday.date} />. 
                Next birthday  <NextBirthday date={birthday.date} />
            </p>)}
      </div>
    )
  }
}
 
BirthdayList.propTypes = {
  birthdays: PropTypes.array.isRequired
}