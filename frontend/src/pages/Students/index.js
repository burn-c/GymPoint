import React, { useEffect, useState } from 'react';
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
          <button>CADASTRAR</button>
          <input type="text" placeholder="  Buscar Alunos" />
        </MenuTopFunc>
      </MenuTop>
      <table>
        <thead>
          <tr>
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
              <td>editar apagar</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
