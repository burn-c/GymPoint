import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import { Container, MenuTop, MenuTopFunc } from './styles';
import api from '~/services/api';

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students?q=');
      const { data } = response;
      setStudents(data);
    }
    loadStudents();
  }, []);

  return (
    <Container>
      <MenuTop>
        <h1>Gerenciando alunos</h1>
        <MenuTopFunc>
          <Link className="btnCadastrar" to="/studentsregistration">
            <MdAdd size="25" />
            CADASTRAR
          </Link>
          <input
            className="btnSearch"
            type="text"
            placeholder="  Buscar Alunos"
          />
        </MenuTopFunc>
      </MenuTop>
      <table>
        <thead>
          <tr className="trCabecalho">
            <th className="cabecalho">ID</th>
            <th className="cabecalho">Nome</th>
            <th className="cabecalho">E-mail</th>
            <th className="cabecalho">Idade</th>
            <th className="cabecalho">Ações</th>
          </tr>
        </thead>
        <tbody>
          {students.map(stud => (
            <tr key={stud.id}>
              <td>{stud.id}</td>
              <td>{stud.name}</td>
              <td>{stud.email}</td>
              <td>{stud.idade}</td>
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
