import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdArrowBack, MdArrowForward } from 'react-icons/md';
import { toast } from 'react-toastify';
import { Container, MenuTop, MenuTopFunc } from './styles';
import api from '~/services/api';
import history from '~/services/history';

export default function Students() {
  const [students, setStudents] = useState([]);
  const [delStudents, setDelStudents] = useState([]);
  const [searchStudent, setSearchStudent] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get(
        `students?q=${searchStudent || ''}/?page=${page}`
      );
      const { data } = response;
      setStudents(data);
    }
    loadStudents();
  }, [delStudents, page, searchStudent]);

  // PAGINAÇÃO
  function nextPage() {
    setPage(page + 1);
  }
  function backPage() {
    setPage(page - 1);
  }

  // DELETAR ESTUDANTE
  async function handleDelete(id, name) {
    // CONFIRMAÇÃO DO APAGAR
    const confirmar = window.confirm(
      `Tem certeza que deseja deletar o cadastro de ${name} ?`
    );

    if (confirmar === true) {
      try {
        await api.delete(`students/${id}`);
        setDelStudents([...delStudents]);
        toast.success('Estudante deletado com sucesso!');
      } catch (err) {
        toast.error('Falha ao deletar o estudante!');
      }
    }
  }

  // EDITAR ESTUDANTE
  async function handleEdit(id) {
    history.push(`student/edit/${id}`);
  }

  return (
    <Container>
      <MenuTop>
        <h1>Gerenciando alunos</h1>
        <MenuTopFunc>
          <Link className="btnCadastrar" to="/studentscreate">
            <MdAdd size="25" />
            CADASTRAR
          </Link>
          <input
            className="btnSearch"
            type="text"
            onChange={e => setSearchStudent(e.target.value)}
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
                <button
                  className="btnEditar"
                  type="button"
                  onClick={() => handleEdit(stud.id)}
                >
                  editar
                </button>
                <button
                  className="btnApagar"
                  type="button"
                  onClick={() => handleDelete(stud.id, stud.name)}
                >
                  apagar
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
          disabled={students.length < 10}
          className="nextPage"
          onClick={nextPage}
        >
          <MdArrowForward size={30} />
        </button>
      </div>
    </Container>
  );
}
