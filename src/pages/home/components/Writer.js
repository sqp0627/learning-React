import React, {Component} from 'react'
import {WriterAvatar, WriterItem, WriterWrapper, WriterDesc, WriterName, WriterLikes} from "../style";
import {actionCreators} from '../store'
import {connect} from "react-redux";

class Writer extends Component {
  render() {
    const {list} = this.props;

    return (
        <WriterWrapper>
          {list.map(item => {
            item = item.toJS();

            return <WriterItem key={item.id}>
              <WriterAvatar src={item.avatar_source}></WriterAvatar>
              <WriterDesc>
                <WriterName>{item.nickname}</WriterName>
                <WriterLikes>写了{item.total_wordage / 1000}k字 · {item.total_likes_count / 1000}k喜欢 </WriterLikes>
              </WriterDesc>
            </WriterItem>
          })}
        </WriterWrapper>
    )
  }

  componentDidMount() {
    const {getList} = this.props;
    getList();
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'writerList'])
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getList() {
      dispatch(actionCreators.getWriterList())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Writer);