import fetch from 'cross-fetch'
import endpoints from './endpoints' 

export const REQUEST_BIRTHDAYS = 'REQUEST_BIRTHDAYS'
export const RECEIVE_BIRTHDAYS = 'RECEIVE_BIRTHDAYS'
 
function requestBirthdays() {
  return {
    type: REQUEST_BIRTHDAYS
  }
}
 
function receiveBirthdays(json) {
  return {
    type: RECEIVE_BIRTHDAYS,
    birthdays: json,
    receivedAt: Date.now()
  }
}
 
function fetchBirthdays() {
  return dispatch => {
    dispatch(requestBirthdays())
    return fetch(endpoints.birthdays)
      .then(response => response.json())
      .then(json => dispatch(requestBirthdays(json)))
  }
}
 
function shouldFetchBirthdays(state) {
  const birthdays = state.birthdays
  if (!birthdays) {
    return true
  } else if (birthdays.isFetching) {
    return false
  } else {
    return birthdays.didInvalidate
  }
}
 
export function fetchBirthdaysIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchBirthdays(getState())) {
      return dispatch(fetchBirthdays())
    }
  }
}