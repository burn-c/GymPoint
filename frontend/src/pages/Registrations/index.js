import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdCheckBox } from 'react-icons/md';
import { toast } from 'react-toastify';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';
import { Container, MenuTop, MenuTopFunc } from './styles';
import api from '~/services/api';
import history from '~/services/history';

export default function Registrations() {
  const [reg, setReg] = useState([]);
  const [cancel, setCancel] = useState([]);
  // const [searchStudent, setSearchStudent] = useState();

  useEffect(() => {
    async function loadRegistraions() {
      const response = await api.get(`registrations`);
      const { data } = response;
      setReg(data);
    }
    loadRegistraions();
  }, [cancel]);

  console.log(reg);

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

  // // EDITAR ESTUDANTE
  // async function handleEdit(id) {
  //   history.push(`student/edit/${id}`);
  // }

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
              <td>
                {format(
                  zonedTimeToUtc(re.start_date, 'America/Sao_Paulo'),
                  "d 'de' MMMM 'de' yyyy",
                  {
                    locale: pt,
                  }
                )}
              </td>
              <td>
                {format(
                  zonedTimeToUtc(re.end_date, 'America/Sao_Paulo'),
                  "d 'de' MMMM 'de' yyyy",
                  {
                    locale: pt,
                  }
                )}
              </td>
              <td>{re.active ? 'SIM' : 'NÃO'}</td>

              <td>
                <button
                  className="btnEditar"
                  type="button"
                  // onClick={() => handleEdit(stud.id)}
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
