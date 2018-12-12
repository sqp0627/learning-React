import * as actionTypes from './actionTypes'
import {fromJS} from "immutable";

const defaultState = fromJS({
  focused: false,
  trendListShow: false,
  list: [],
  curPage: 1,
  totalPage: 0
});

export default (state = defaultState, action) => {
  switch (action.type){
    case actionTypes.SEARCH_FOCUS:
      return state.set('focused', true).set('trendListShow', true);
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false);
    case actionTypes.MOUSE_LEAVE:
      return state.set('trendListShow', false);
    case actionTypes.CHANGE_LIST:
      return state.set('list', action.payload).set('totalPage', Math.ceil(action.payload.size / 10));
    case actionTypes.CHANGE_PAGE:
      return state.set('curPage', action.payload);
    default:
      return state
  }
}