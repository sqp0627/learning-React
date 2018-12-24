import styled from 'styled-components'

export const LoginWrapper = styled.div`
  background: #eee;
  position: absolute;
  top: 58px;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const LoginBox = styled.div`
  margin: 50px auto;
  padding: 50px 50px 30px;
  width: 400px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  vertical-align: middle;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  padding: 4px 12px 4px 35px;
  border: 1px solid #c8c8c8;
  border-radius: 0 0 4px 4px;
  background-color: hsla(0,0%,71%,.1);
  vertical-align: middle;
  box-sizing: border-box;
`;

export const Button = styled.button`
  margin-top: 20px;
  width: 100%;
  padding: 9px 18px;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  color: #fff;
  background: #3194d0;
  cursor: pointer;
  outline: none;
  display: block;
  clear: both;
`;