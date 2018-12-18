import * as actionTypes from './actionTypes'
import axios from 'axios'

const changeDetail = (data) => ({
  type: actionTypes.CHANGE_DETAIL,
  payload: data
});

export const getDetail = () => {
  return (dispatch) => {
    axios.get('/api/detail.json').then(res => {
      const data = res.data;
      dispatch(changeDetail(data.data));
    }).catch(req => {
      console.log(req);
    })
  }
};