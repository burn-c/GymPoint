import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';
import Background from '~/components/Background';
import HelpOrderList from '~/components/HelpOrderList';

import { Container, List } from './styles';

export default function HelpOrders() {
  const [helpOrders, setHelpOrders] = useState([]);
  const id = useSelector(state => state.auth.id);

  useEffect(() => {
    async function loadHelpOrders() {
      const response = await api.get(`students/8/help_orders`);

      setHelpOrders(response.data);
    }
    loadHelpOrders();
  }, [id]);

  return (
    <Background>
      <Container>
        <List
          data={helpOrders}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <HelpOrderList data={item} />}
        />
      </Container>
    </Background>
  );
}

HelpOrders.navigationOptions = {
  tabBarLabel: 'Pedir ajuda',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="live-help" size={20} color={tintColor} />
  ),
};
