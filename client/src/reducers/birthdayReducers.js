import {
  REQUEST_POSTS,
  RECEIVE_POSTS
} from './../actions/birthdayActions'
 
function birthdays(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.birthdays,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}
 
export { birthdays }