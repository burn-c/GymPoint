import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { MdArrowBack, MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Container, MenuTop, MenuTopFunc } from './styles';
import api from '~/services/api';

// EDITAR --------------------------------------------------------------------------------
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

export default function StudentEdit() {
  const [student, setStudent] = useState([]);
  // const dispatch = useDispatch();
  // /**
  //  * EDITAR ESTA FUNÇÃO--------------------------------------------------------------------
  //  *
  //  */
  // function handleSubmit({ name, email, idade, peso, altura }) {
  //   dispatch(studentCreateRequest(name, email, idade, peso, altura));
  // }

  useEffect(() => {
    async function loadStudentEdit() {
      const id = window.location.href.slice(35);
      console.log(id);
      const response = await api.get(`students/${id}/edit`);
      const { data } = response;
      setStudent(data);
    }
    loadStudentEdit();
  }, []);

  async function handleSubmit(name, email, peso, altura, idade) {
    try {
      await api.put('students', name, email, peso, altura, idade);

      console.log(name, email, peso, altura, idade);
    } catch {
      console.log('Erooo!');
    }
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <MenuTop>
          <h1>Editar cadastro de aluno</h1>
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
              value={student.name}
              placeholder="Digite seu nome"
            />
          </li>

          <li>
            <label>ENDEREÇO DE E-MAIL</label>
            <Input
              className="inputEmail"
              name="email"
              type="email"
              value={student.email}
              placeholder="Digite seu e-mail"
            />
          </li>
          <div className="divDados">
            <li>
              <label>IDADE</label>
              <Input
                name="idade"
                type="number"
                value={student.idade}
                placeholder="Idade"
              />
            </li>

            <li>
              <label>PESO (em Kg)</label>
              <Input
                name="peso"
                type="number"
                value={student.peso}
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
                value={student.altura}
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
