import * as actionTypes from './actionTypes'
import {fromJS} from "immutable";

const defaultState = fromJS({
  focused: false
});

export default (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    // immutable的set方法会结合之前的immutable对象的值和设置的值，返回一个新的对象
    return state.set('focused', true)
  } else if (action.type === actionTypes.SEARCH_BLUR) {
    return state.set('focused', false)
  }
  return state;
}