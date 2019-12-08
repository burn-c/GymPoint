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
  justify-content: flex-start;
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
