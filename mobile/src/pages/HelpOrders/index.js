import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import api from '~/services/api';
import Background from '~/components/Background';
import Header from '~/components/Header';
import HelpOrderList from '~/components/HelpOrderList';

import { Container, NewHelpOrder, List } from './styles';

export default function HelpOrders({ navigation }) {
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
      <Header />
      <Container>
        <NewHelpOrder onPress={() => navigation.navigate('NewHelpOrder')}>
          Novo pedido de auxílio
        </NewHelpOrder>
        <List
          data={helpOrders}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <HelpOrderList data={item} navigation={navigation} />
          )}
        />
      </Container>
    </Background>
  );
}
