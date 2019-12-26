import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

import { toast } from 'react-toastify';
import { Container, MenuTop, MenuTopFunc } from './styles';
import api from '~/services/api';
import history from '~/services/history';

export default function Plans() {
  const [plans, setPlans] = useState([]);
  const [plansDel, setPlansDel] = useState([]);

  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('plans');
      const { data } = response;
      setPlans(data);
    }
    loadPlans();
  }, [plansDel]);

  // DELETAR PLANO
  async function handleDelete(id, plan) {
    // CONFIRMAÇÃO DO CANCELAR
    const confirmar = window.confirm(
      `Tem certeza que deseja cancelar o plano ${plan}?`
    );
    if (confirmar === true) {
      try {
        await api.delete(`plans/${id}`);
        setPlansDel([...plansDel]);
        toast.success('Plano deletado com sucesso!');
      } catch {
        toast.error('Erro ao deletar plano!');
      }
    }
  }

  // EDITAR PLANO
  async function handleEdit(id) {
    history.push(`/plan/${id}`);
  }

  return (
    <Container>
      <MenuTop>
        <h1>Gerenciar planos</h1>
        <MenuTopFunc>
          <Link className="btnCadastrar" to="/plancreate">
            <MdAdd size="25" />
            CADASTRAR
          </Link>
        </MenuTopFunc>
      </MenuTop>
      <table>
        <thead>
          <tr className="trCabecalho">
            <th className="cabecalho">TÍTULO</th>
            <th className="cabecalho">DURAÇÃO</th>
            <th className="cabecalho">VALOR p/ MÊS</th>
            <th className="cabecalho">AÇÕES</th>
          </tr>
        </thead>
        <tbody>
          {plans.map(plan => (
            <tr key={plan.id}>
              <td>{plan.title}</td>
              <td>
                {plan.duration} {plan.duration > 1 ? 'meses' : 'mês'}
              </td>
              <td>R$ {plan.price},00</td>
              <td>
                <button
                  className="btnEditar"
                  type="button"
                  onClick={() => handleEdit(plan.id)}
                >
                  editar
                </button>
                <button
                  className="btnApagar"
                  type="button"
                  onClick={() => handleDelete(plan.id, plan.title)}
                >
                  apagar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
