import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import { Container, NewButton, CheckinsList } from './styles';

export default function Checkins() {
  return (
    <Background>
      <Container>
        <NewButton>Novo Check-in</NewButton>
        <CheckinsList />
      </Container>
    </Background>
  );
}

Checkins.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="edit-location" size={20} color={tintColor} />
  ),
};
