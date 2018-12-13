import React, {Component} from 'react'
import {TopicItem, TopicWrapper} from "../style";
import {connect} from "react-redux";
import {actionCreators} from '../store'

class Topic extends Component {
  render() {
    const {list} = this.props;

    return (
        <TopicWrapper>
          {
            list.map((item, index) => {
              item = item.toJS();
              return <TopicItem key={index}>
                <img className={'topic-pic'} src={item.avatar} alt={item.title}/>
                {item.title}
              </TopicItem>
            })
          }
        </TopicWrapper>
    )
  }
  componentDidMount() {
    const {getTopicList} = this.props;
    getTopicList();
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'topicList']),
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    getTopicList() {
      dispatch(actionCreators.getTopicList())
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Topic);