import { combineReducers } from 'redux'
import { birthdays } from './birthdayReducers'
 
const rootReducer = combineReducers({
  birthdays
})
 
export default rootReducer