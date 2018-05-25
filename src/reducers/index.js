import { combineReducers } from 'redux'
import itemReduce from './item-reduce'
import infoReduce from './info-reduce'

export default combineReducers({
  itemReduce,
  infoReduce
})
