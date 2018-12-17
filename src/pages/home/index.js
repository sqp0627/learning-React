import React, {PureComponent} from 'react'
import {HomeLeft, HomeRight, HomeWrapper, BackTop} from "./style";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import {connect} from "react-redux";
import {actionCreators} from './store'

class Home extends PureComponent {

  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  render() {
    const {showScroll} = this.props;

    return (
        <HomeWrapper>
          <HomeLeft>
            <img
                className='banner-image'
                height='270'
                src="//upload.jianshu.io/admin_banners/web_images/4583/40bca38a47b32bdc04a1997a6ac9e76951217c18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                alt={'轮播'}/>
            <Topic/>
            <List/>
          </HomeLeft>
          <HomeRight>
            <Recommend/>
            <Writer/>
          </HomeRight>
          {showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
        </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.changeScrollTopShow();
  }
}

const initMapStateToProps = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
});

const initMapDispatchToProps = (dispatch) => ({
  changeScrollTopShow() {
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 100) {
        dispatch(actionCreators.changeScrollTopShow(true))
      } else {
        dispatch(actionCreators.changeScrollTopShow(false))
      }
    })
  }
});

export default connect(initMapStateToProps, initMapDispatchToProps)(Home);