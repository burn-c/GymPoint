import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Menu, User } from './styles';
import logo from '~/assets/logo.png';

export default function Header() {
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
            <Link to="/">sair do sistema</Link>
          </div>
        </User>
      </Content>
    </Container>
  );
}
