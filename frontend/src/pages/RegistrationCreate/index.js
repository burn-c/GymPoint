import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { MdArrowBack, MdCheck } from 'react-icons/md';
import { Form, Input, Select } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import history from '~/services/history';

import { Container, MenuTop, MenuTopFunc } from './styles';
import api from '~/services/api';

export default function RegistrationCreate() {
  const [students, setStudents] = useState([]);
  const [plans, setPlans] = useState([]);

  // SALVAR MATRÍCULA
  async function handleSubmit({ student_id, plan_id, start_date }) {
    try {
      await api.post('registrations', { student_id, plan_id, start_date });
      toast.success('Matrícula cadastrada com sucesso! :)');
      history.push('registrations');
    } catch {
      toast.error('Falha ao cadastrar matrícula! :(');
    }
  }

  // BUSCA A LISTA DE ALUNOS
  async function loadStudents() {
    const response = await api.get('students/?q=');
    const { data } = response;
    const options = data.map(item => ({
      id: item.id,
      title: item.name,
    }));
    setStudents(options);
  }

  // BUSCA A LISTA DE PLANOS
  async function loadPlans() {
    const response = await api.get('plans');
    const { data } = response;
    const options = data.map(item => ({
      id: item.id,
      title: item.title,
    }));
    setPlans(options);
  }

  useEffect(() => {
    loadStudents();
    loadPlans();
  }, []);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
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
            <Select
              className="selectAluno"
              name="student_id"
              options={students}
            />
          </li>

          <div className="divDados">
            <li>
              <label>PLANO</label>
              <Select className="selectPlan" name="plan_id" options={plans} />
            </li>

            <li>
              <label>DATA DE INÍCIO</label>
              <Input name="start_date" type="date" />
            </li>

            <li>
              <label>DATA DE TÉRMINO</label>
              <Input name="endDate" type="date" readOnly />
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
