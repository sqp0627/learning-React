import * as actionTypes from './actionTypes'
const defaultState = {
  focused: false
};

export default (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    return {
      focused: true
    }
  } else if (action.type === actionTypes.SEARCH_BLUR) {
    return {
      focused: false
    }
  }
  return state;
}