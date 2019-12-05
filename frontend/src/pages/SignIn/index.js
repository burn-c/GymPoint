import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import logo from '~/assets/logo.png';

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="GymPoint" />
      <Form onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input name="password" type="password" placeholder="Digite seu senha" />

        <button type="submit">Acessar Painel</button>
      </Form>
    </>
  );
}
