import styled from 'styled-components';

export const Container = styled.div`
  width: 900px;

  align-self: center;
  margin-right: auto;
  margin-left: auto;
  align-items: center;

  table {
    background: rgba(255, 255, 255, 0.3);
    width: 900px;
    align-self: center;
    margin-right: auto;
    margin-left: auto;
    font-size: 16px;
    border-radius: 10px;
    padding: 10px;

    .cabecalho {
      text-align: left;
      font-size: 20px;
    }
  }
`;

export const MenuTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 30px;

  button {
    border: 0;
    padding: 2px;
    border-radius: 4px;
    width: 120px;
    background-color: #ff3d3d;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
  }

  input {
    border: 0;
    margin-left: 10px;
    border-radius: 4px;
  }
`;

export const MenuTopFunc = styled.div`
  display: flex;
`;
