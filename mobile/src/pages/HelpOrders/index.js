import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { withNavigationFocus } from 'react-navigation';
import api from '~/services/api';
import Background from '~/components/Background';
import Header from '~/components/Header';
import HelpOrderList from '~/components/HelpOrderList';

import { Container, NewHelpOrder, List } from './styles';

function HelpOrders({ navigation, isFocused }) {
  const [helpOrders, setHelpOrders] = useState([]);
  const id = useSelector(state => state.auth.id);

  // ORDENA CHECK-INS DESCRECENTE
  function desc(a, b) {
    if (a.id < b.id) return 1;

    if (a.id > b.id) return -1;

    return 0;
  }

  useEffect(() => {
    // CARREGA LISTAGEM DO HELP ORDERS
    async function loadHelpOrders() {
      const response = await api.get(`students/${id}/help_orders`);

      response.data.sort(desc);
      setHelpOrders(response.data);
    }
    // ATUALIZA A PÁGINA SEMPRE QUE É ACESSADA
    if (isFocused) {
      loadHelpOrders();
    }
  }, [id, isFocused]);

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

export default withNavigationFocus(HelpOrders);
