import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdArrowBack, MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Container, MenuTop, MenuTopFunc } from './styles';

import { studentCreateRequest } from '~/store/modules/student/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatória!'),
  email: Yup.string()
    .email('E-mail inválido! :( ')
    .required('O e-mail é obrigatório!'),
  password: Yup.string().required('A senha é obrigatória!'),
  idade: Yup.number().required('A idade é obrigatória!'),
  peso: Yup.number().required('O peso é obrigatória!'),
  altura: Yup.number().required('A altura é obrigatória!'),
});

export default function StudentRegistration() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, idade, peso, altura }) {
    dispatch(studentCreateRequest(name, email, idade, peso, altura));
  }

  return (
    <Container>
      <MenuTop>
        <h1>Cadastro de aluno</h1>
        <MenuTopFunc>
          <Link className="btnVoltar" to="/students">
            <MdArrowBack size="25" />
            VOLTAR
          </Link>
          <button type="submit">
            <MdCheck size="25" />
            SALVAR
          </button>
        </MenuTopFunc>
      </MenuTop>
      <Form schema={schema} onSubmit={handleSubmit}>
        <div className="divInfo">
          <h2>NOME COMPLETO</h2>
          <Input name="name" type="name" placeholder="Digite seu nome" />
          <h2>ENDEREÇO DE E-MAIL</h2>
          <Input name="email" type="email" placeholder="Digite seu e-mail" />
        </div>
        <div className="divDadosTitulo">
          <h2>IDADE</h2>
          <h2>PESO (em Kg)</h2>
          <h2>ALTURA</h2>
        </div>
        <div className="divDados">
          <Input name="idade" type="idade" placeholder="Idade" />
          <Input name="peso" type="peso" placeholder="Peso" />
          <Input name="altura" type="altura" placeholder="Altura" />
        </div>
      </Form>
    </Container>
  );
}
