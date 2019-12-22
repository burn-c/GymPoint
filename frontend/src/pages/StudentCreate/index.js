import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdArrowBack, MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Container, MenuTop, MenuTopFunc } from './styles';

import { studentCreateRequest } from '~/store/modules/student/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório!'),
  email: Yup.string()
    .email('E-mail inválido! :( ')
    .required('O e-mail é obrigatório!'),
  idade: Yup.number()
    .required()
    .typeError('A idade é obrigatória!'),
  peso: Yup.number()
    .round()
    .required()
    .typeError('O peso é obrigatóro!'),
  altura: Yup.number()
    .round()
    .required()
    .typeError('A altura é obrigatória!'),
});

export default function StudentCreate() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, idade, peso, altura }) {
    dispatch(studentCreateRequest(name, email, idade, peso, altura));
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
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
        <ul>
          <li>
            <label>NOME COMPLETO</label>
            <Input
              className="inputName"
              name="name"
              type="text"
              placeholder="Digite seu nome"
            />
          </li>

          <li>
            <label>ENDEREÇO DE E-MAIL</label>
            <Input
              className="inputEmail"
              name="email"
              type="email"
              placeholder="Digite seu e-mail"
            />
          </li>
          <div className="divDados">
            <li>
              <label>IDADE</label>
              <Input name="idade" type="number" placeholder="Idade" />
            </li>

            <li>
              <label>PESO (em Kg)</label>
              <Input
                name="peso"
                type="number"
                placeholder="Peso"
                step="0.01"
                min="0"
              />
            </li>

            <li>
              <label>ALTURA</label>
              <Input
                name="altura"
                type="number"
                placeholder="Altura"
                step="0.01"
                min="0"
              />
            </li>
          </div>
        </ul>
      </Form>
    </Container>
  );
}
