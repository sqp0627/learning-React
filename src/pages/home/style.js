import styled from 'styled-components'

export const HomeWrapper = styled.div`
  margin: 0 auto;
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
  width: 240px;
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