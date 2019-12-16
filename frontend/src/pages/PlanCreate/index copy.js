import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

// import * as Yup from 'yup';
import { MdArrowBack, MdCheck } from 'react-icons/md';

import { Container, MenuTop, MenuTopFunc } from './styles';

export default function PlanCreate() {
  return (
    <Container>
      <Form>
        <MenuTop>
          <h1>Cadastro de Plano</h1>
          <MenuTopFunc>
            <Link className="btnVoltar" to="/plans">
              <MdArrowBack size="25" />
              VOLTAR
            </Link>
            <button type="submit">
              <MdCheck size="25" />
              SALVAR
            </button>
          </MenuTopFunc>
        </MenuTop>

        <label>
          TÍTULO DO PLANO
          <Input name="plan" type="text" />
        </label>
        <label>
          DURAÇÃO (em meses)
          <Input />
        </label>
        <label>
          PREÇO MENSAL
          <Input />
        </label>
        <label>
          PREÇO TOTAL
          <Input />
        </label>
      </Form>
    </Container>
  );
}
