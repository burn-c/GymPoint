import React from 'react';
import { Container } from '../Students/styles';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

export default function PlanCreate() {


  return (
    <Container>
      <Form>
        <label>
          TÍTULO DO PLANO
          <Input name="plan" type="text" placeholder="Digite seu e-mail" />
        </label>
        <label>
          DURAÇÃO (em meses)
          <Input>
          </Input>
        </label>
        <label>
          PREÇO MENSAL
          <Input>
          </Input>
        </label>
          <label>
          PREÇO TOTAL
          <Input>
          </Input>
        </label>
      </Form>
    </Container>
  )
}
