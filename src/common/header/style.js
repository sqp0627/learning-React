import styled from 'styled-components'
import logoPic from '../../statics/nav-logo.png'

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0
  height: 58px;
  width: 100%;
  border-bottom: 1px solid #f0f0f0;
  background: #fff;
  z-index: 2;
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
  
  .zoom{
    position: absolute;
    bottom: 6px;
    right: 5px;
    padding: 5px;    
  }
  
  &.focused{
    input{
      width: 240px;
    }
    .zoom{
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

export const HotSearch = styled.div`
  position: absolute;
  top: 58px;
  left: 20px;
  width: 200px;
  padding: 0 20px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
`;

export const HotSearchTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

export const SearchSwitch = styled.span`
  float: right;
  font-size: 12px;
  cursor: pointer;
  &:hover{
    color: #666;
  }
  .spin{
    float: left;
    margin-right: 3px;
    /*图标旋转*/
    transition: all .2s ease-in;
    transform: rotate(0deg);
    transform-origin: center center;
  }
`;

export const SearchItem = styled.a`
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 8px;
  padding: 0px 6px;
  font-size: 12px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
  line-height: 20px;
  cursor: pointer;
  
  &:hover{
    color:#333;
    border-color: #ccc;
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