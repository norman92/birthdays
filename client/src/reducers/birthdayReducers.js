import {
  REQUEST_BIRTHDAYS,
  RECEIVE_BIRTHDAYS
} from './../actions/birthdayActions'
 
function birthdays(
  state = {
    isFetching: false,
    didInvalidate: false,
    birthdays: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_BIRTHDAYS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_BIRTHDAYS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        birthdays: action.birthdays,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}
 
export { birthdays }