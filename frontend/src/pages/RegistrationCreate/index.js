import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { MdArrowBack, MdCheck } from 'react-icons/md';
import { Form, Input, Select } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { addMonths, parseISO, format } from 'date-fns';
import history from '~/services/history';

import { Container, MenuTop, MenuTopFunc } from './styles';
import api from '~/services/api';

export default function RegistrationCreate() {
  const [students, setStudents] = useState([]);
  const [plans, setPlans] = useState([]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [planDuration, setPlanDuration] = useState();

  // SALVAR MATRÍCULAhttps://forum.imasters.com.br/topic/https://forum.imasters.com.br/topic/312939-propriedades-de-um-select/312939-propriedades-de-um-select/
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
      duration: item.duration,
    }));
    setPlans(options);
  }

  useEffect(() => {
    loadStudents();
    loadPlans();
  }, []);

  // SALVA A DURAÇÃO DO PLANO SELECIONADO PARA FUNÇÃO DE CALCULAR DATA TÉRMINO
  function handlePlanId(id) {
    const month = plans.find(p => p.id === Number(id));
    setPlanDuration(month.duration);
  }

  // SALVA DATA INICIAL SELECIONADA
  function handleStartDate(start_date) {
    try {
      if (start_date) {
        const date = parseISO(start_date);

        setStartDate(date);
      }
    } catch {
      toast.error('Selecione um plano!');
    }
  }

  // CALCULA DATA DE TÉRMINO ( PRIMEIRO VALIDA SE TEMOS O PLANO E DATA SELECIONADO )
  useEffect(() => {
    if (planDuration && startDate) {
      const date = addMonths(startDate, planDuration);

      const dateFormat = format(new Date(date), 'dd/MM/yyyy');

      setEndDate(dateFormat);
    }
  }, [planDuration, startDate]);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <MenuTop>
          <h1>Cadastro de matrícula</h1>
          <MenuTopFunc>
            <Link className="btnVoltar" to="/registrations  ">
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
              <Select
                className="selectPlan"
                name="plan_id"
                options={plans}
                onChange={e => handlePlanId(e.target.value)}
              />
            </li>

            <li>
              <label>DATA DE INÍCIO</label>
              <Input
                name="start_date"
                type="date"
                pattern="dd/MM/yyyy"
                onChange={e => handleStartDate(e.target.value)}
              />
            </li>

            <li>
              <label>DATA DE TÉRMINO</label>
              <Input name="endDate" type="text" value={endDate} readOnly />
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
