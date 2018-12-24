import React, {Component} from 'react'
import {connect} from "react-redux";
import {actionCreators} from './store'
import {Input, LoginBox, LoginWrapper, Button} from "./style";
import {Redirect} from "react-router-dom";

class Login extends Component {
  render() {
    const  {loginStatus} = this.props;
    if (!loginStatus) {
      return (
          <LoginWrapper>
            <LoginBox>
              <Input ref={(input) => {
                this.account = input
              }} placeholder="账号"/>
              <Input type="password" ref={(input) => {
                this.password = input
              }} placeholder="密码"/>
              <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
            </LoginBox>
          </LoginWrapper>
      )
    } else {
      return <Redirect to="/"/>
    }
  }
}

const initMapStateToProps = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
});

const initMapDispatchToProps = (dispatch) => ({
  login(account, password) {
    dispatch(actionCreators.login(account.value, password.value))
  }
});

export default connect(initMapStateToProps, initMapDispatchToProps)(Login);
