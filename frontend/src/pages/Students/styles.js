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

    .btnEditar {
      background: none;
      border: 0;
      margin-right: 10px;
      color: #990000;
    }

    .btnApagar {
      background: none;
      border: 0;
      color: #0033cc;
    }
  }
`;

export const MenuTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;

  button {
    border: 0;
    padding: 2px;
    border-radius: 4px;
    width: 140px;
    background-color: #ff3d3d;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    align-content: center;
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
