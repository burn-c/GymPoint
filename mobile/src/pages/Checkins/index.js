import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import CheckinList from '~/components/CheckinList';

import { Container, NewButton, CheckinsList } from './styles';

const data = [1, 2, 3, 4, 5, 6];

export default function Checkins() {
  return (
    <Background>
      <Container>
        <NewButton>Novo Check-in</NewButton>
        <CheckinsList
          data={data}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => <CheckinList data={item} />}
        />
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
