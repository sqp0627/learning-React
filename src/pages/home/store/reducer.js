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
    imgUrl: '//upload-images.jianshu.io/upload_images/2998364-8af048759d0a0682.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    title: '最好的认知方式根本就不是读书，而是直接使用这个工具',
    desc: '文 | 程驿 每个人都会遇到「读书记不住」这个问题，但你是如何去解决的呢？ 01 你其实在监狱中 我们先来看一个场景： 有一天晚上，有个人让你去...'
  }]
});

export default (state = defaultState, action) => {
  switch (action.type){
    case actionTypes.GET_TOPIC_LIST:
      return state.set('topicList', action.payload);
    case actionTypes.GET_ARTICLE_LIST:
      return state.set('articleList', action.payload);
    default:
      return state
  }
}