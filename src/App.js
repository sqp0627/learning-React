import React, {Component} from 'react';
import {Globalstyle} from "./style";
import Header from "./common/header";
import {Iconfont} from "./statics/iconfont/iconfont";
import store from './store/index'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from "./pages/home";
import Detail from "./pages/detail";

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Globalstyle/>
          <Iconfont/>
          <BrowserRouter>
            <div>
              <Header/>
              <Route path={'/'} exact component={Home}></Route>
              <Route path={'/detail'} exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
