import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ReactModal from 'react-modal';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { Container, MenuTop } from './styles';
import api from '~/services/api';
import './styles.css';

export default function HelpOrders() {
  const [helpOrders, setHelpOrders] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState();
  const [idQuestion, setIdQuestion] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadHelpOrdes() {
      const response = await api.get(`help_orders/list/?page=${page}`);
      const { data } = response;
      setHelpOrders(data);
    }
    loadHelpOrdes();
  }, [modalIsOpen, page]);

  // PAGINAÇÃO
  function nextPage() {
    setPage(page + 1);
  }
  function backPage() {
    setPage(page - 1);
  }

  // MODAL
  function openModal(id, quest) {
    setQuestion(quest);
    setIdQuestion(id);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // ENVIAR RESPOSTA
  async function handleSubmit() {
    try {
      await api.put(`help_orders/${idQuestion}/answer`, { answer });

      closeModal();
      setPage(1);
      toast.success('Resposta enviada com sucesso! :)');
    } catch {
      toast.error('Erro ao enviar resposta! :(');
    }
  }

  return (
    <Container>
      <MenuTop>
        <h1>Pedidos de auxílio</h1>
      </MenuTop>
      <table hidden={helpOrders.length === 0}>
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
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="Modal"
        >
          <h2>PERGUNTA DO ALUNO</h2>
          <p>{question}</p>
          <h2>SUA RESPOSTA</h2>
          <form onSubmit={handleSubmit}>
            <textarea
              name="answer"
              id=""
              cols="30"
              rows="10"
              onChange={e => setAnswer(e.target.value)}
              placeholder="Digite sua resposta aqui..."
            />
            <button type="button" onClick={handleSubmit} className="btnSubmit">
              Responder aluno
            </button>
          </form>
        </ReactModal>
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
            disabled={helpOrders.length < 10}
            className="nextPage"
            onClick={nextPage}
          >
            <MdArrowForward size={30} />
          </button>
        </div>
      </div>
      <div className="divMsg" hidden={helpOrders.length !== 0}>
        <strong>Você já respondeu todas as perguntas desta página! :)</strong>
      </div>
    </Container>
  );
}
