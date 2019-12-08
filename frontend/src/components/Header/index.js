import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, Content, Menu, User } from './styles';
import logo from '~/assets/logo.png';

import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GymPoint" />
        </nav>
        <aside>
          <Menu>
            <Link to="/students">ALUNOS</Link>
            <Link to="/plans">PLANOS</Link>
            <Link to="/registrations">MATRÍCULAS</Link>
            <Link to="/helporders">PEDIDOS DE AUXÍLIO</Link>
          </Menu>
        </aside>
        <User>
          <div>
            <strong>Carlos Oliveira</strong>
            <button type="button" onClick={handleSignOut}>
              sair do sistema
            </button>
          </div>
        </User>
      </Content>
    </Container>
  );
}
