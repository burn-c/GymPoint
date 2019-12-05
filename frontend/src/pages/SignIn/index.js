import React from 'react';
// import { Container } from './styles';
import logo from '~/assets/logo.png';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="GymPoint" />
      <form>
        <input type="email" placeholder="Digite seu e-mail" />
        <input type="password" placeholder="Digite seu senha" />

        <button type="submit">Acessar Painel</button>
      </form>
    </>
  );
}
