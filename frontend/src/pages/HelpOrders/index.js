import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';
import { Container, MenuTop, MenuTopFunc } from './styles';
import api from '~/services/api';
import history from '~/services/history';

export default function HelpOrders() {
  const [helpOrders, setHelpOrders] = useState([]);
  // const [delStudents, setDelStudents] = useState([]);
  // const [searchStudent, setSearchStudent] = useState();

  useEffect(() => {
    async function loadHelpOrdes() {
      const response = await api.get(`help_orders/list`);
      const { data } = response;
      setHelpOrders(data);
    }
    loadHelpOrdes();
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

  // EDITAR ESTUDANTE
  async function handleEdit(id) {
    history.push(`help/edit/${id}`);
  }

  return (
    <Container>
      <MenuTop>
        <h1>Pedidos de auxílio</h1>
      </MenuTop>
      <table>
        <thead>
          <tr className="trCabecalho">
            <th className="cabecalho">ALUNO</th>
            <th className="cabecalho">Ações</th>
          </tr>
        </thead>
        <tbody>
          {helpOrders.map(help => (
            <tr key={help.id}>
              <td>{help.student.name}</td>
              <td>
                <button
                  className="btnEditar"
                  type="button"
                  onClick={() => handleEdit(help.id)}
                >
                  responder
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
