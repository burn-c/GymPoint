import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;

  align-self: center;
  margin-right: auto;
  margin-left: auto;
  align-items: center;

  table {
    background: rgba(255, 255, 255, 0.3);
    max-width: 900px;
    min-width: 300px;

    align-self: center;
    margin-right: auto;
    margin-left: auto;
    font-size: 16px;
    border-radius: 10px;
    padding: 30px 20px 30px 20px;

    td {
      padding-bottom: 10px;
      padding-top: 10px;
      padding-right: 10px;
      margin-bottom: 0 10px 5px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.6);
    }

    .cabecalho {
      text-align: left;
      font-size: 20px;
    }

    .btnResponder {
      background: none;
      border: 0;
      margin-right: 10px;
      color: #0033cc;
    }
  }

  /*
  * ESTILO DO MENU DE PAGINAÇÃO
  */
  .paginacao {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
  }

  strong {
    font-size: 30px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 30px;
    padding: 5px 10px 5px 10px;
    margin: 0 5px 0 5px;
  }

  .nextPage,
  .backPage {
    border-radius: 30px;
    padding: 5px 10px 5px 10px;
  }

  .divMsg strong {
    display: flex;
    align-content: center;
    justify-content: center;
    font-size: 20px;
    margin-top: 50px;
  }
`;

export const MenuTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
`;
