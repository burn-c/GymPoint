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
    padding: 30px 20px 30px 20px;

    td {
      padding-bottom: 10px;
      padding-top: 10px;
      margin-bottom: 5px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.6);
    }

    .cabecalho {
      text-align: left;
      font-size: 20px;
    }

    .btnEditar {
      background: none;
      border: 0;
      margin-right: 10px;
      color: #0033cc;
    }

    .btnCancelar {
      background: none;
      border: 0;
      color: #c71585;
    }
  }
`;

export const MenuTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;

  .btnCadastrar {
    border: 0;
    padding: 2px;
    border-radius: 4px;
    width: 140px;
    height: 40px;
    background-color: #ff1493;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
  }

  .btnSearch {
    background: rgba(255, 255, 255, 0.4);
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
