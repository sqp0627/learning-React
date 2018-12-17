import {fromJS} from "immutable";
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  topicList: [{
    id: '',
    avatar: '',
    slug: '',
    title: ''
  }],
  articleList: [{
    imgUrl: '',
    title: '',
    desc: ''
  }],
  recommendList: [{
    id: null,
    imgUrl: ''
  }],
  writerList: [{
    id: null,
    slug: "",
    nickname: "",
    avatar_source: "",
    total_likes_count: null,
    total_wordage: null,
    is_following_user: false
  }]
});

export default (state = defaultState, action) => {
  switch (action.type){
    case actionTypes.GET_TOPIC_LIST:
      return state.set('topicList', action.payload);
    case actionTypes.GET_ARTICLE_LIST:
      return state.set('articleList', action.payload);
    case actionTypes.GET_MORE_ARTICLE_LIST:
      return state.set('articleList', state.get('articleList').concat(action.payload));
    case actionTypes.GET_RECOMMEND_LIST:
      return state.set('recommendList', action.payload);
    case actionTypes.GET_WRITER_LIST:
      return state.set('writerList', action.payload);
    default:
      return state
  }
}