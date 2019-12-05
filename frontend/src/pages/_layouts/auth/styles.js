import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(
    152deg,
    rgba(233, 68, 112, 1) 0%,
    rgba(246, 83, 200, 1) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  height: 350px;
  max-width: 320px;
  width: 100%;
  background: rgba(255, 255, 255, 0.7);
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
  padding: 12px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  input {
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 2px;
    height: 40px;
    padding: 0 15px;
    color: #000;
    margin: 10px;
    font-size: 14px;

    &::placeholder {
      color: rgba(0, 0, 0, 1);
    }
  }
  button {
    margin: 5px 0 0;
    height: 50px;
    background: radial-gradient(
      circle,
      rgba(19, 201, 134, 1) 0%,
      rgba(0, 255, 169, 1) 150%
    );
    color: #fff;
    font-weight: bold;
    border: 0;
    border-radius: 10px;
    font-size: 20px;
    margin: 10px;
    transition: background 1s;

    &:hover {
      background: ${darken(0.00005, '#13c986')};
    }
  }
`;
