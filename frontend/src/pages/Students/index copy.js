import React, { useEffect, useState } from 'react';
import Table from '~/components/Table';
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
        <MenuTopFunc />
      </MenuTop>
      <ul>
        {students.map(stud => (
          <li key={stud.id}>{stud.name}</li>
        ))}
      </ul>
    </Container>
  );
}
