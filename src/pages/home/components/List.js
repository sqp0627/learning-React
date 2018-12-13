import React, {Component} from 'react'
import {ListItem, ListInfo} from "../style";
import {actionCreators} from "../store";
import {connect} from "react-redux";

class List extends Component {
  render() {
    const {list} = this.props;
    return (
        <div>
          {
            list.map((item, index) => {
              return <ListItem key={index}>
                <img className={'pic'} src={item.get('imgUrl')} alt={index}/>
                <ListInfo>
                  <a className={'title'} href={'/detail'}><h3>{item.get('title')}</h3></a>
                  <p className={'abstract'}>{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            })
          }
        </div>
    )
  }

  componentDidMount() {
    const {getArticleList} = this.props;
    getArticleList();
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'articleList']),
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    getArticleList() {
      dispatch(actionCreators.getArticleList())
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(List);