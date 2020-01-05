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

  // ORDENA CHECK-INS DESCRECENTE
  function desc(a, b) {
    if (a.id < b.id) return 1;

    if (a.id > b.id) return -1;

    return 0;
  }

  useEffect(() => {
    async function loadHelpOrders() {
      const response = await api.get(`students/8/help_orders`);

      response.data.sort(desc);
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
