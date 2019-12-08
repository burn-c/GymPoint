import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 2px 30px;
`;

export const Content = styled.div`
  height: 60px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
      height: 50px;
    }
  }
`;

export const Menu = styled.div`
  a {
    font-weight: bold;
    color: #999;
    padding-right: 15px;
  }
`;

export const User = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #000;
      font-weight: bold;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #dc143c;
      font-weight: bold;
    }
  }
`;
