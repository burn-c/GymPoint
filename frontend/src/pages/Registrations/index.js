import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';
import { Container, MenuTop, MenuTopFunc } from './styles';
import api from '~/services/api';
import history from '~/services/history';

export default function Registrations() {
  const [reg, setReg] = useState([]);
  // const [delStudents, setDelStudents] = useState([]);
  // const [searchStudent, setSearchStudent] = useState();

  useEffect(() => {
    async function loadRegistraions() {
      const response = await api.get(`registrations`);
      const { data } = response;
      setReg(data);
    }
    loadRegistraions();
  }, []);

  // // DELETAR ESTUDANTE
  // async function handleDelete(id) {
  //   try {
  //     await api.delete(`students/${id}`);
  //     setDelStudents([...delStudents]);
  //     toast.success('Estudante deletado com sucesso!');
  //   } catch (err) {
  //     toast.error('Falha ao deletar o estudante!');
  //   }
  // }

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
              <td>{re.start_date}</td>
              <td>{re.end_date}</td>
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
                  className="btnApagar"
                  type="button"
                  // onClick={() => handleDelete(stud.id)}
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
