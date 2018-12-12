import React, {Component} from 'react';
import {Globalstyle} from "./style";
import Header from "./common/header";
import {Iconfont} from "./statics/iconfont/iconfont";
import store from './store/index'
import {Provider} from 'react-redux'

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Globalstyle/>
          <Iconfont/>
          <Header/>
        </Provider>
    );
  }
}

export default App;
