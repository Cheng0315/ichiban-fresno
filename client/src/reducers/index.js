import {combineReducers} from 'redux'
import plateReducer from './plateReducer'

export default combineReducers ({
  plates: plateReducer
})
