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
  const [planData, setPlanData] = useState();
  const [priceTotal, setPriceTotal] = useState('0');

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
      price: item.price,
    }));
    setPlans(options);
  }

  // CARREGA OS DADOS DOS INPUTS
  useEffect(() => {
    loadStudents();
    loadPlans();
  }, []);

  // SALVA A DURAÇÃO E PREÇO DO PLANO SELECIONADO PARA FUNÇÃO DE CALCULAR DATA TÉRMINO E VALOR FINAL
  function handlePlanId(id) {
    const plan = plans.find(p => p.id === Number(id));
    setPlanData({ duration: plan.duration, price: plan.price });
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
    if (planData && startDate) {
      const date = addMonths(startDate, planData.duration);

      const dateFormat = format(new Date(date), 'dd/MM/yyyy');

      const priceCalc = String(planData.price * planData.duration);

      setPriceTotal(priceCalc);
      setEndDate(dateFormat);
    }
  }, [planData, startDate]);

  // SALVAR MATRÍCULA
  async function handleSubmit({ student_id, plan_id, start_date }) {
    try {
      await api.post('registrations', { student_id, plan_id, start_date });
      toast.success('Matrícula cadastrada com sucesso! :)');
      history.push('registrations');
    } catch {
      toast.error('Falha ao cadastrar matrícula, verique os dados! :(');
    }
  }

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
              <Input
                name="total"
                type="text"
                value={`R$ ${priceTotal},00`}
                readOnly
              />
            </li>
          </div>
        </ul>
      </Form>
    </Container>
  );
}
