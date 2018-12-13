import React, {Component} from 'react'
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, HotSearch, HotSearchTitle, SearchSwitch, SearchItem} from "./style";
import {CSSTransition} from 'react-transition-group';
import {connect} from "react-redux";
import {actionCreators} from './store'

class Header extends Component {
  render() {
    const {focused, handleInputFocus, handleInputBlur, list} = this.props;

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
                <NavSearch onFocus={() => {handleInputFocus(list)}} onBlur={handleInputBlur}></NavSearch>
              </CSSTransition>
              <i className="iconfont zoom">&#xe62b;</i>
              {this.searchTrending()}
            </SearchWrapper>
          </Nav>
          <Addition>
            <Button className="reg">注册</Button>
            <Button className="writing"><i className="iconfont">&#xe615;</i>写文章</Button>
          </Addition>
        </HeaderWrapper>
    )
  }

  searchTrending() {
    const {trendListShow, list, curPage, totalPage, handleMouseLeave, handlePageChange} = this.props;
    const newList = list.toJS();  // list为immutable保护的对象，不能直接操作
    const pageList = [];
    for (let i = (curPage - 1) * 10; i < curPage * 10; i++) {
      if (newList[i]) {
        pageList.push(<SearchItem key={i}>{newList[i]}</SearchItem>);
      }
    }

    if (trendListShow) {
      return (
          <HotSearch onMouseLeave={handleMouseLeave}>
            <HotSearchTitle>
              热门搜索
              <SearchSwitch onClick={() => {
                handlePageChange(curPage, totalPage, this.spinIcon)
              }}><i ref={(icon) => {
                this.spinIcon = icon
              }} className="iconfont spin">&#xe851;</i>换一批</SearchSwitch>
            </HotSearchTitle>
            <div>{pageList}</div>
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
    trendListShow: state.getIn(['header', 'trendListShow']),
    list: state.getIn(['header', 'list']),
    curPage: state.getIn(['header', 'curPage']),
    totalPage: state.getIn(['header', 'totalPage'])
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      if (!list.size) {
        dispatch(actionCreators.getList());
      }
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handlePageChange(curPage, totalPage, spinIcon) {
      // 图标旋转
      let originAngle = spinIcon.style.transform.replace(/[^0-9]/g, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spinIcon.style.transform = `rotate(${originAngle + 360}deg)`;

      // 切换显示的数据
      if (curPage < totalPage) {
        curPage++;
      } else {
        curPage = 1;
      }
      dispatch(actionCreators.changePage(curPage))
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);