import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdCheckBox, MdArrowBack, MdArrowForward } from 'react-icons/md';
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
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadRegistraions() {
      const response = await api.get(`registrations/?page=${page}`);
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
  }, [cancel, page]);

  // PAGINAÇÃO
  function nextPage() {
    setPage(page + 1);
  }
  function backPage() {
    setPage(page - 1);
  }

  // CANCELAR MATRÍCULA
  async function handleCancel(id, name, plan) {
    // CONFIRMAÇÃO DO CANCELAR
    const confirmar = window.confirm(
      `Tem certeza que deseja cancelar a matrícula de ${name} do plano ${plan}?`
    );
    if (confirmar === true) {
      try {
        await api.delete(`registrations/${id}`);
        setCancel([...cancel]);
        toast.success('Matrícula cancelada com sucesso!');
      } catch (err) {
        toast.error('Falha ao cancelar matrícula!');
      }
    }
  }

  // EDITAR MATRÍCULA
  async function handleEdit(id) {
    history.push(`registrations/${id}`);
  }

  return (
    <Container>
      <MenuTop>
        <h1>Gerenciando matrículas</h1>
        <MenuTopFunc>
          <Link className="btnCadastrar" to="/registrationcreate">
            <MdAdd size="25" />
            CADASTRAR
          </Link>
        </MenuTopFunc>
      </MenuTop>
      <table>
        <thead>
          <tr>
            <th className="cabecalho">ALUNO</th>
            <th className="cabecalhoCenter">PLANO</th>
            <th className="cabecalhoCenter">INÍCIO</th>
            <th className="cabecalhoCenter">TÉRMINO</th>
            <th className="cabecalhoCenter">ATIVA</th>
            <th className="cabecalhoCenter">AÇÕES</th>
          </tr>
        </thead>
        <tbody>
          {reg.map(re => (
            <tr key={re.id} className="trCenter">
              <td>{re.student.name}</td>
              <td className="tdCenter">{re.plan.title}</td>
              <td className="tdCenter">{re.startDateFormated}</td>
              <td className="tdCenter">{re.endDateFormated}</td>
              <td className="checkbox">
                <MdCheckBox
                  size="20"
                  color={!re.active ? '#CD6889' : '#32CD32'}
                />
              </td>

              <td className="tdCenter">
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
                  onClick={() =>
                    handleCancel(re.id, re.student.name, re.plan.title)
                  }
                >
                  cancelar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="paginacao">
        <button
          type="button"
          disabled={page === 1}
          className="backPage"
          onClick={backPage}
        >
          <MdArrowBack size={30} />
        </button>
        <strong>{page}</strong>
        <button
          type="button"
          disabled={reg.length < 10}
          className="nextPage"
          onClick={nextPage}
        >
          <MdArrowForward size={30} />
        </button>
      </div>
    </Container>
  );
}
