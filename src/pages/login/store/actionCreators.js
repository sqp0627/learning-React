import * as actionTypes from './actionTypes'
import axios from 'axios'
import {fromJS} from "immutable";

const changeLogin = (data) => ({
  type: actionTypes.CHANGE_LOGIN,
  payload: fromJS(data)
});

export const logout = (data) => ({
  type: actionTypes.LOGOUT,
  payload: fromJS(data)
});

export const login = (account, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account='+account + '&password='+ password).then(res => {
      const result = res.data.data;
      if (result) {
        dispatch(changeLogin(result));
      } else {
        dispatch(changeLogin(false));
      }
    }).catch(req => {
      console.log(req);
    })
  }
};