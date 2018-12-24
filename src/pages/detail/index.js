import React, {Component} from 'react'
import {connect} from "react-redux";
import {actionCreators} from './store'
import {Content, DetailWrapper, Header} from "./style";

class Detail extends Component {
  render() {
    const {title, content} = this.props;

    return (
        <DetailWrapper>
          <Header>{title}</Header>
          <Content dangerouslySetInnerHTML={{__html: content}}/>
        </DetailWrapper>
    )
  }

  componentDidMount() {
    // this.props.location 可以获取到'?id=1'
    // this.props.match.params.id   路由参数id
    this.props.getDetail(this.props.match.params.id);
  }
}

const initMapStateToProps = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
});

const initMapDispatchToProps = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id))
  }
});

export default connect(initMapStateToProps, initMapDispatchToProps)(Detail);