import styled from 'styled-components'

export const HomeWrapper = styled.div`
  margin: 58px auto 0 auto;
  width: 960px;
  overflow: hidden;
`;

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  margin-top: 30px;
  width: 625px;
`;

export const HomeRight = styled.div`
  float: right;
  width: 280px;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  margin-bottom: 15px;
  margin-left: -18px;
`;

export const TopicItem = styled.div`
 float: left;
 margin-bottom: 18px;
 margin-left: 18px;
 padding-right: 10px;
 height: 32px;
 font-size: 14px;
 line-height: 32px;
 background: #f7f7f7;
 color: #000;
 border: 1ps solid #dcdcdc;
 border-radius: 4px;
  .topic-pic{
    float: left;
    margin-right: 10px;
    width: 32px;
    height: 32px;
  }
`;

export const ListItem = styled.div`
  position: relative;
  padding: 20px 0;
  margin-bottom: 15px;
  border-bottom: 1px solid #dcdcdc;
  .pic{
    position: absolute;
    top: 20px;
    right: 0;
    width: 150px;
    height:100px;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
  }
`;

export const ListInfo = styled.div`
  padding-right: 165px;
  .title{
    display: inline-block;
    margin-bottom: 4px;
    line-height: 1.5;
    font-size: 18px;
    font-weight: 700;
    color: #333;
    &:hover{
       text-decoration: underline;
    }
   }
   .abstract{
    font-size: 13px;
    line-height: 24px;
    color: #999;
   }
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 2px;
  color: #fff;
  background: #a5a5a5;
  margin: 30px 0;
  cursor: pointer;
`;

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;

export const RecommendItem = styled.div`
  margin-bottom: 6px;
  height: 50px;
  width: 100%;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`;

export const WriterWrapper = styled.ul`
  text-align: left;
  list-style: none;
`;

export const WriterItem = styled.li`
  margin-top: 15px;
`;

export const WriterAvatar = styled.img`
  display: inline-block;
  width: 48px;
  height: 48px;
  margin-right: 10px;
`;

export const WriterDesc = styled.div`
  display: inline-block;
  vertical-align: top;
`;

export const WriterName = styled.p`
  padding-top: 5px;
  margin-right: 60px;
  font-size: 14px;
  color: #333;
  line-height: 25px;
`;

export const WriterLikes = styled.p`
  margin-top: 2px;
  font-size: 12px;
  color: #969696;
  line-height: 20px;
`;

export const BackTop = styled.div`
  position: fixed;
  right: 30px;
  bottom:30px;
  font-size: 14px;
  width: 60px;
  height: 60px;
  line-height:60px;
  text-align: center;
  border: 1px solid #eee;
  border-radius: 4px;
`;