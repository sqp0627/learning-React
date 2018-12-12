import React, {Component} from 'react'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  HotSearch,
  HotSearchTitle, SearchSwitch, SearchItem
} from "./style";
import {CSSTransition} from 'react-transition-group';
import {connect} from "react-redux";
import {actionCreators} from './store'

class Header extends Component {
  render() {
    const {focused, handleInputFocus, handleInputBlur} = this.props;

    return (
        <HeaderWrapper>
          <Logo></Logo>
          <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载App</NavItem>
            <NavItem className="right">登录</NavItem>
            <NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
            <SearchWrapper className={focused ? 'focused' : ''}>
              <CSSTransition in={focused} timeout={300} classNames="slide">
                <NavSearch onFocus={handleInputFocus} onBlur={handleInputBlur}></NavSearch>
              </CSSTransition>
              <i className="iconfont">&#xe62b;</i>
              {this.searchTrending()}
            </SearchWrapper>
          </Nav>
          <Addition>
            <Button className="reg">注册</Button>
            <Button className="writing"><i className="iconfont">&#xe62c;</i>写文章</Button>
          </Addition>
        </HeaderWrapper>
    )
  }

  searchTrending() {
    const {focused, list} = this.props;

    if (focused) {
      return (
          <HotSearch>
            <HotSearchTitle>
              热门搜索
              <SearchSwitch>换一批</SearchSwitch>
            </HotSearchTitle>
            <div>
              {list.map((item, index) => {
                return (
                    <SearchItem key={index}>{item}</SearchItem>
                )
              })}
            </div>
          </HotSearch>
      )
    } else {
      return null;
    }
  };
};

const mapStateToProps = (state) => {
  return {
    // focused: state.get('header').get('focused') // 跟下面的写法等价
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list'])
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);