import React from 'react';
import { View } from 'react-native';

import { Container, NewButton, CheckinsList } from './styles';

export default function Checkins() {
  return (
    <Container>
      <NewButton>Novo Check-in</NewButton>
      <CheckinsList />
    </Container>
  );
}
