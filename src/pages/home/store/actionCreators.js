import * as actionTypes from './actionTypes'
import axios from 'axios'
import {fromJS} from "immutable";

const topicList = (data) => ({
  type: actionTypes.GET_TOPIC_LIST,
  payload: fromJS(data)
});

const articleList = (data) => ({
  type: actionTypes.GET_ARTICLE_LIST,
  payload: fromJS(data)
});

// export const searchFocus = () => ({
//   type: actionTypes.SEARCH_FOCUS,
// });

export const getTopicList = () => {
  return (dispatch) => {
    axios.get('/api/topic.json').then(res => {
      const data = res.data;
      dispatch(topicList(data.data));
    }).catch(req => {
      console.log(req);
    })
  }
};

export const getArticleList = () => {
  return (dispatch) => {
    axios.get('/api/article.json').then(res => {
      const data = res.data;
      dispatch(articleList(data.data));
    }).catch(req => {
      console.log(req);
    })
  }
};