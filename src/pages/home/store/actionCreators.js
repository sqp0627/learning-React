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

const recommendList = (data) => ({
  type: actionTypes.GET_RECOMMEND_LIST,
  payload: fromJS(data)
});

const writerList = (data) => ({
  type: actionTypes.GET_WRITER_LIST,
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

export const getRecommendList = () => {
  return (dispatch) => {
    axios.get('/api/recommend.json').then(res => {
      const data = res.data;
      dispatch(recommendList(data.data));
    }).catch(req => {
      console.log(req);
    })
  }
};

export const getWriterList = () => {
  return (dispatch) => {
    axios.get('/api/writer.json').then(res => {
      const data = res.data;
      dispatch(writerList(data.data));
    }).catch(req => {
      console.log(req);
    })
  }
};