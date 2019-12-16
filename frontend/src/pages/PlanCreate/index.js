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
          <h1>Cadastrar plano</h1>
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
        <ul>
          <li>
            <label htmlFor="title">TÍTULO DO PLANO</label>
            <Input name="title" />
          </li>
          <div className="divDados">
            <li>
              <label htmlFor="duration">DURAÇÃO (em meses)</label>
              <Input name="duration" />
            </li>

            <li>
              <label htmlFor="price">PREÇO MENSAL</label>
              <Input name="price" />
            </li>
            <li>
              <label htmlFor="totalprice">PREÇO TOTAL</label>
              <Input name="totalprice" />
            </li>
          </div>
        </ul>
      </Form>
    </Container>
  );
}
