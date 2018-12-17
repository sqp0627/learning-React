import React, {PureComponent} from 'react'
import {RecommendItem, RecommendWrapper} from "../style";
import {actionCreators} from "../store";
import {connect} from "react-redux";

class Recommend extends PureComponent {
  render() {
    const {list} = this.props;

    return (
        <RecommendWrapper>
          {list.map(item => {
            return <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}></RecommendItem>
          })}
        </RecommendWrapper>
    )
  }

  componentDidMount() {
    const {getRecommendList} = this.props;
    getRecommendList();
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'recommendList']),
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    getRecommendList() {
      dispatch(actionCreators.getRecommendList())
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Recommend);