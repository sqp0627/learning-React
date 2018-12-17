import React, {Component} from 'react'
import {ListItem, ListInfo, LoadMore} from "../style";
import {actionCreators} from "../store";
import {connect} from "react-redux";

class List extends Component {
  render() {
    const {list, getMore} = this.props;
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
          <LoadMore onClick={getMore}>阅读更多</LoadMore>
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
    },
    getMore() {
      dispatch(actionCreators.getMoreArticleList())
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(List);