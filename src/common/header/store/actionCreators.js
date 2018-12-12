import * as actionTypes from './actionTypes'
import axios from 'axios'
import {fromJS} from "immutable";

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  payload: fromJS(data)
});

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS,
});

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
});

export const mouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE
});

export const changePage = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  payload: page
});

export const getList = () => {
  return (dispatch) => {
   axios.get('/api/trending.json').then(res => {
     const data = res.data;
     dispatch(changeList(data.data));
   }).catch(req => {
     console.log(req);
   })
  }
};