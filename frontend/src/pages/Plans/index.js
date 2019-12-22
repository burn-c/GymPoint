import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

import { Container, MenuTop, MenuTopFunc } from './styles';
import api from '~/services/api';

export default function Plans() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('plans');
      const { data } = response;
      setPlans(data);
    }
    loadPlans();
  }, []);

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
              <td>{plan.price}</td>
              <td>
                <button className="btnEditar" type="button">
                  editar
                </button>
                <button className="btnApagar" type="button">
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
