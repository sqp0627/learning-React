import React, {Component} from 'react'
import {Content, DetailWrapper, Header} from "../home/style";
import {connect} from "react-redux";
import {actionCreators} from './store'

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
    this.props.getDetail();
  }
}

const initMapStateToProps = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
});

const initMapDispatchToProps = (dispatch) => ({
  getDetail() {
    dispatch(actionCreators.getDetail())
  }
});

export default connect(initMapStateToProps, initMapDispatchToProps)(Detail);