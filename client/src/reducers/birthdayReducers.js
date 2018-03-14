import {
  REQUEST_BIRTHDAYS,
  RECEIVE_BIRTHDAYS,
  POST_BIRTHDAY,
  BIRTHDAY_SAVED
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
        birthdaySaved: false,   
        birthdaySaving: false             
      })
    case RECEIVE_BIRTHDAYS:
      return Object.assign({}, state, {
        isFetching: false,
        birthdays: action.birthdays,
        lastUpdated: action.receivedAt,
        birthdaySaved: false,
        birthdaySaving: false
      })
    case POST_BIRTHDAY:
      return Object.assign({}, state, {
        isFetching: false,
        birthdays: state.birthdays,
        lastUpdated: action.receivedAt,
        birthdaySaved: false,
        birthdaySaving: true
      })
    case BIRTHDAY_SAVED:
      return Object.assign({}, state, {
        isFetching: false,
        birthdays: [...state.birthdays, action.birthday],
        lastUpdated: action.receivedAt,
        birthdaySaved: true,
        birthdaySaving: false
      })      
    default:
      return state
  }
}
 
export { birthdays }