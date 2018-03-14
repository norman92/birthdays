import endpoints from './endpoints' 

export const REQUEST_BIRTHDAYS = 'REQUEST_BIRTHDAYS'
export const RECEIVE_BIRTHDAYS = 'RECEIVE_BIRTHDAYS'
export const POST_BIRTHDAY = 'POST_BIRTHDAY'
export const BIRTHDAY_SAVED = 'BIRTHDAY_SAVED'

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

function postBirthday() {
  return {
    type: POST_BIRTHDAY
  }
}

function birthdaySaved(json) {
  return {
    type: BIRTHDAY_SAVED,
    birthday: json
  }
}
 
function fetchBirthdays() {
  return dispatch => {
    dispatch(requestBirthdays())
    return fetch(endpoints.birthdays)
      .then(response => response.json())
      .then(json => dispatch(receiveBirthdays(json)))
  }
}
 
function shouldFetchBirthdays(state) {
  const birthdays = state.birthdays
  if ((!birthdays || !birthdays.length) && !birthdays.isFetching) {
    return true
  } else  {
    return false
  }
}
 
export function fetchBirthdaysIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchBirthdays(getState())) {
      return dispatch(fetchBirthdays())
    }
  }
}

export function addBirthday(birthday) {
  return (dispatch) => {
    dispatch(postBirthday())
    return fetch(endpoints.birthdays, {
      method: "POST",
      body: birthday
    }).then(response => response.json())
      .then(json => dispatch(birthdaySaved(json)))
  }
}