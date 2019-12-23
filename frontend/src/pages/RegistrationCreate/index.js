import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { MdArrowBack, MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import AsyncSelect from 'react-select/async';
import { Container, MenuTop, MenuTopFunc } from './styles';
import api from '~/services/api';

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

export default function RegistrationCreate() {
  const [student, setStudent] = useState([]);
  function handleSubmit() {}

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students/?q=');
      const { data } = response;
      const options = data.map(item => ({
        inputValue: item.name,
      }));
      setStudent(options);
    }
    loadStudents();
  }, []);

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <MenuTop>
          <h1>Cadastro de matrícula</h1>
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
            <label>ALUNO</label>
            <AsyncSelect cacheOptions defaultOptions options={student} />
          </li>

          <div className="divDados">
            <li>
              <label>PLANO</label>
              <AsyncSelect cacheOptions defaultOptions />
            </li>

            <li>
              <label>DATA DE INÍCIO</label>
              <Input
                name="startDate"
                type="number"
                placeholder="Escolha a data"
                step="0.01"
                min="0"
              />
            </li>

            <li>
              <label>DATA DE TÉRMINO</label>
              <Input name="endDate" type="number" readOnly />
            </li>
            <li>
              <label>VALOR FINAL</label>
              <Input name="total" type="number" readOnly />
            </li>
          </div>
        </ul>
      </Form>
    </Container>
  );
}
