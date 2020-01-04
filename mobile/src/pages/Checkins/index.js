import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Alert } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {} from 'react-navigation';
import api from '~/services/api';
import Background from '~/components/Background';
import CheckinList from '~/components/CheckinList';

import { Container, NewButton, CheckinsList } from './styles';

export default function Checkins() {
  const [checkins, setCheckins] = useState([]);
  const [loading, setLoading] = useState(false);
  const id = useSelector(state => state.auth.id);

  useEffect(() => {
    async function loadCheckins() {
      const response = await api.get(`students/${id}/checkins`);

      // ORDENA CHECK-INS DESCRECENTE
      function desc(a, b) {
        if (a.id < b.id) return 1;

        if (a.id > b.id) return -1;

        return 0;
      }

      // ADICIONA O CAMPO QUANTIDADES DE CHECK-INS
      const checkinList = response.data.map(item => ({
        ...item,
        count: response.data.indexOf(item) + 1,
      }));

      checkinList.sort(desc);
      setCheckins(checkinList);
    }
    loadCheckins();
  }, [id, loading]);

  // EFETUAR CHECK-IN
  async function handleNewCheckin() {
    try {
      setLoading(true);
      await api.post(`students/${id}/checkins`);
      Alert.alert('Sucesso!', 'Check-in efetuado com sucesso!');
      setLoading(false);
    } catch (error) {
      Alert.alert('Erro!', `${error.response.data.error}`);
      setLoading(false);
    }
  }

  return (
    <Background>
      <Container>
        <NewButton loading={loading} onPress={handleNewCheckin}>
          Novo Check-in
        </NewButton>
        <CheckinsList
          data={checkins}
          keyExtractor={item => String(item.id)}
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
