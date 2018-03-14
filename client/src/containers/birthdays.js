import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchBirthdaysIfNeeded, addBirthday } from './../actions/birthdayActions'
import BirthdayList from './../components/birthdaysList'
import AddBirthdayForm from './../components/addBirthdayForm'

class Birthdays extends Component {
  constructor(props) {
    super(props)

    this.addBirthday = this.addBirthday.bind(this)
  } 

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchBirthdaysIfNeeded())
  }
   
  addBirthday(values) {
    const { dispatch } = this.props
    dispatch(addBirthday(values))
  }

  render() {
    const { birthdays, isFetching, lastUpdated } = this.props
    return (
      <div>
        <p>
          {lastUpdated &&
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
            </span>}
        </p>
        {isFetching && birthdays.length === 0 && <h2>Loading...</h2>}
        {!isFetching && birthdays.length === 0 && <h2>Add your first birthday!</h2>}
        {birthdays.length > 0 &&
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <BirthdayList birthdays={birthdays} />
          </div>}

          <h2>Add birthday</h2>
          <AddBirthdayForm onSubmit={this.addBirthday} />
      </div>
    )
  }
}
 
Birthdays.propTypes = {
  birthdays: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}
 
function mapStateToProps(state) {
  const {
    isFetching,
    lastUpdated,
    birthdays
  } = state.birthdays || {
    isFetching: true,
    birthdays: []
  }
 
  return {
    birthdays,
    isFetching,
    lastUpdated
  }
}
 
export default connect(mapStateToProps)(Birthdays)