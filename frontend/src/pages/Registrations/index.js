import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdCheckBox } from 'react-icons/md';
import { toast } from 'react-toastify';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { zonedTimeToUtc } from 'date-fns-tz';
import { Container, MenuTop, MenuTopFunc } from './styles';
import api from '~/services/api';
import history from '~/services/history';

export default function Registrations() {
  const [reg, setReg] = useState([]);
  const [cancel, setCancel] = useState([]);

  useEffect(() => {
    async function loadRegistraions() {
      const response = await api.get(`registrations`);
      const { data } = response;

      // FORMATA A DATA ADICIONANDO 2 CAMPOS NO OBJETO "startDateFormated" E "endDateFormated"
      const dataAlterado = data.map(item => ({
        ...item,
        startDateFormated: format(
          zonedTimeToUtc(item.start_date, 'America/Sao_Paulo'),
          "d 'de' MMMM 'de' yyyy",
          {
            locale: pt,
          }
        ),
        endDateFormated: format(
          zonedTimeToUtc(item.end_date, 'America/Sao_Paulo'),
          "d 'de' MMMM 'de' yyyy",
          {
            locale: pt,
          }
        ),
      }));

      setReg(dataAlterado);
    }
    loadRegistraions();
    // SEMPRE QUE UM PLANO É CANCELADO A TABELA É ATUALIZADA
  }, [cancel]);

  // CANCELAR MATRÍCULA
  async function handleCancel(id) {
    try {
      console.log(id);
      await api.delete(`registrations/${id}`);
      setCancel([...cancel]);
      toast.success('Matrícula cancelada com sucesso!');
    } catch (err) {
      toast.error('Falha ao cancelar matrícula!');
    }
  }

  // EDITAR ESTUDANTE
  async function handleEdit(id) {
    history.push(`registrations/${id}`);
  }

  return (
    <Container>
      <MenuTop>
        <h1>Gerenciando matrículas</h1>
        <MenuTopFunc>
          <Link className="btnCadastrar" to="/studentscreate">
            <MdAdd size="25" />
            CADASTRAR
          </Link>
          <input
            className="btnSearch"
            type="text"
            // onChange={e => setSearchStudent(e.target.value)}
            placeholder="  Buscar Aluno"
          />
        </MenuTopFunc>
      </MenuTop>
      <table>
        <thead>
          <tr className="trCabecalho">
            <th className="cabecalho">ALUNO</th>
            <th className="cabecalho">PLANO</th>
            <th className="cabecalho">INÍCIO</th>
            <th className="cabecalho">TÉRMINO</th>
            <th className="cabecalho">ATIVA</th>
            <th className="cabecalho">AÇÕES</th>
          </tr>
        </thead>
        <tbody>
          {reg.map(re => (
            <tr key={re.id}>
              <td>{re.student_id}</td>
              <td>{re.plan_id}</td>
              <td>{re.startDateFormated}</td>
              <td>{re.endDateFormated}</td>
              <td>
                <MdCheckBox className="checkbox" size="20" active={re.active} />
              </td>

              <td>
                <button
                  className="btnEditar"
                  type="button"
                  onClick={() => handleEdit(re.id)}
                >
                  editar
                </button>
                <button
                  className="btnCancelar"
                  type="button"
                  onClick={() => handleCancel(re.id)}
                >
                  cancelar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
