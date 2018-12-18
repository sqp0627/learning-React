import {fromJS} from "immutable";
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  title: '',
  content: '',
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_DETAIL:
      return state.merge({title: action.payload.title, content: action.payload.content});
      // return state.set('title', action.payload.title).set('content', action.payload.content);  // 和上面的写法等价
    default:
      return state
  }
}