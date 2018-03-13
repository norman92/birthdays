import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchBirthdaysIfNeeded } from './../actions/birthdayActions'
import BirthdayList from './../components/birthdaysList'

class Birthdays extends Component {
 
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchBirthdaysIfNeeded())
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