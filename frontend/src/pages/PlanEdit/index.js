import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import * as Yup from 'yup';
import { MdArrowBack, MdCheck } from 'react-icons/md';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';

import { Container, MenuTop, MenuTopFunc } from './styles';

// VALIDAÇÃO DOS INPUTS
const schema = Yup.object().shape({
  title: Yup.string().required('O nome do plano é obrigatório!'),
  duration: Yup.number()
    .required()
    .typeError('A duração do plano é obrigatório!'),
  price: Yup.number()
    .round()
    .required()
    .typeError('O preço do plano é obrigatório!'),
});

export default function PlanEdit() {
  const [plan, setPlan] = useState([]);
  const [planPrice, setPlanPrice] = useState();
  const [planDuration, setPlanDuration] = useState();
  const [planTotal, setPlanTotal] = useState();
  const id = Number(window.location.href.slice(27));

  // CARREGA OS DADOS PARA EDIÇÃO
  useEffect(() => {
    async function loadPlan() {
      const response = await api.get(`/plans`);
      const { data } = response;
      const planFind = data.find(p => p.id === id);
      setPlan(planFind);
      setPlanDuration(planFind.duration);
      setPlanPrice(planFind.price);
    }
    loadPlan();
  }, [id]);

  // ATUALIZA O TOTAL DO PLANO
  useEffect(() => {
    function calculate() {
      setPlanTotal(planDuration * planPrice);
    }

    calculate();
  }, [planDuration, planPrice, planTotal]);

  // REQUISIÇÃO DE EDIÇÃO DO PLANO
  async function handleSubmit(title, duration, price) {
    try {
      await api.put(`plans/${id}`, title, duration, price);

      history.push('/plans');
      toast.success('Plano cadastrado com sucesso! :)');
    } catch {
      toast.error('Erro ao cadastrar plano! :(');
    }
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
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
            <Input
              name="title"
              type="text"
              value={plan.title}
              onChange={e => setPlan(e.target.value)}
              placeholder="Digite o título do plano"
            />
          </li>
          <div className="divDados">
            <li>
              <label htmlFor="duration">DURAÇÃO (em meses)</label>
              <Input
                name="duration"
                type="number"
                onChange={e => setPlanDuration(e.target.value)}
                value={planDuration}
                placeholder="Digite qtd. meses"
                max="12"
                min="0"
              />
            </li>

            <li>
              <label htmlFor="price">PREÇO MENSAL</label>
              <Input
                name="price"
                type="number"
                onChange={e => setPlanPrice(e.target.value)}
                value={planPrice}
                placeholder="Digite o preço"
                step="1.00"
                min="0"
              />
            </li>
            <li>
              <label htmlFor="totalprice">PREÇO TOTAL</label>
              <Input
                name="totalprice"
                readOnly
                value={`R$ ${!planTotal ? '0,00' : `${planTotal},00`}`}
              />
            </li>
          </div>
        </ul>
      </Form>
    </Container>
  );
}
