import React from 'react';
import { Container, CheckInCount, Date } from './styles';

export default function CheckinList() {
  return (
    <Container>
      <CheckInCount>Check-in #7</CheckInCount>

      <Date>Hoje às 14hrs</Date>
    </Container>
  );
}
