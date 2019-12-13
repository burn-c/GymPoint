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

    td {
      padding-bottom: 10px;
      padding-top: 10px;
      margin-bottom: 5px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    }

    .cabecalho {
      text-align: left;
      font-size: 20px;
    }
  }

  .divInfo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .divDadosTitulo {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    justify-content: space-between;
    align-content: initial;
    max-width: 900px;
  }
  .divDados {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }

  h2 {
    font-size: 10px;
  }
`;

export const MenuTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;

  a {
    border: 0;
    padding: 2px;
    border-radius: 4px;
    width: 110px;
    height: 40px;
    background-color: #ff1493;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    align-content: center;
    margin-left: 10px;
    justify-content: center;
  }

  button {
    border: 0;
    padding: 2px;
    border-radius: 4px;
    width: 110px;
    height: 40px;
    background-color: #ff1493;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    align-content: center;
    margin-left: 10px;
    justify-content: center;
  }

  .btnVoltar {
    background-color: #d3d3d3;
  }

  input {
    background: rgba(255, 255, 255, 0.5);
    border: 0;
    border-radius: 4px;
    height: 40px;
    padding: 0 15px;
    color: #000;
    margin-left: 10px;
    font-size: 16px;

    &::placeholder {
      color: rgba(0, 0, 0, 1);
    }
  }
`;

export const MenuTopFunc = styled.div`
  display: flex;
`;
