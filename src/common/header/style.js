import styled from 'styled-components'
import logoPic from '../../statics/nav-logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
  href: '/'
})`
  position:absolute;
  top: 0;
  left: 0;
  height: 58px;
  width: 100px;
  display: block;
  background: url(${logoPic});
  background-size: contain;
  cursor: pointer;
`;

export const Nav = styled.div`
  padding-right: 70px;
  width: 960px;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const NavItem = styled.div`
  padding: 0 15px;
  font-size: 17px;
  line-height: 58px;
  color: #333;
  &.left{
    float:left;
  }
  &.right{
    float: right;
    color: #969696;
  }
  &.active{
    color: #ea6f5a
  }
`;

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  
  .iconfont{
    position: absolute;
    bottom: 6px;
    right: 5px;
    padding: 5px;    
  }
  
  &.focused{
    input{
      width: 240px;
    }
    .iconfont{
      background: #777;
      color: #fff;
      border-radius: 13px;
    }
  }  
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  margin-top: 10px;
  margin-left: 20px;
  padding: 0 20px;
  width: 160px;
  height: 38px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  box-sizing: border-box;
  font-size: 14px;
  &::placeholder{
    color: #999;
  }
  &.slide-enter{
    transition: all .3s ease-out;
  }
  &.fade-enter-active{
    width: 240px;
  }
  &.slide-exit{
    transition: all .3s ease-out;
  }
  &.slide-exit-active{
    width: 160px;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 58px;
`;

export const Button = styled.div`
  display: inline-block;
  margin-top: 10px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 15px;
  
  &.reg{
    color: #ea6f5a
  }
  &.writing{
    color: #fff;
    background: #ea6f5a
    
    .iconfont{
      margin-right: 3px;
    }
  }
`;