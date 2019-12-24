import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';
import ReactModal from 'react-modal';
import { Container, MenuTop } from './styles';
import api from '~/services/api';
import history from '~/services/history';
import './styles.css';

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

  // MODAL

  const [modalIsOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState();
  const [idQuestion, setIdQuestion] = useState();

  function openModal(id, quest) {
    setQuestion(quest);
    setIdQuestion(id);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }



  // ENVIAR RESPOSTA
  async function handleAfterCloseFunc({ answer }) {
    try {
      console.log(answer);
      await api.put(`help_orders/${idQuestion}/answer`, answer);

      toast.success('Resposta enviada com sucesso! :)');
      // closeModal();
    } catch {
      toast.error('Erro ao enviar resposta! :(');
    }
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
                  className="btnResponder"
                  type="button"
                  onClick={() => openModal(help.id, help.question)}
                >
                  responder
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <ReactModal isOpen={modalIsOpen} className="Modal">
          <h2>PERGUNTA DO ALUNO</h2>
          <p>{question}</p>
          <h2>SUA RESPOSTA</h2>
          <form onSubmit={handleAfterCloseFunc}>
            <textarea
              name="answer"
              id=""
              cols="30"
              rows="10"
              placeholder="Digite sua resposta aqui..."
            />
            <button
              type="button"
              onClick={handleAfterCloseFunc}
              className="btnSubmit"
            >
              Responder aluno
            </button>
          </form>
        </ReactModal>
      </div>
      <div className="divTeste">
        <form onSubmit={handleAfterCloseFunc}>
          <textarea
            name="answer"
            id=""
            cols="30"
            rows="10"
            placeholder="Digite sua resposta aqui..."
          />
          <button
            type="button"
            onClick={handleAfterCloseFunc}
            className="btnSubmit"
          >
            Responder aluno
          </button>
        </form>
      </div>
    </Container>
  );
}
