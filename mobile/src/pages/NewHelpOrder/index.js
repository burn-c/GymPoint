import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';
import api from '~/services/api';
import Background from '~/components/Background';
import { Container, Form, TextBox, NewHelpOrderButton } from './styles';

export default function NewHelpOrder({ navigation }) {
  const [question, setQuestion] = useState('');
  const id = useSelector(state => state.auth.id);

  async function handleSubmit() {
    try {
      await api.post(`students/${id}/help_orders`, { question });
      navigation.navigate('HelpOrders');
      Alert.alert('Enviado!', 'Pedido enviado com sucesso!');
    } catch (error) {
      Alert.alert('Erro!', `${error.response.data.error}`);
    }
  }

  return (
    <Background>
      <Container>
        <Form>
          <TextBox
            multiline
            numberOfLines={10}
            textAlignVertical="top"
            placeholder="Digite sua pergunta aqui..."
            onSubmitediting={handleSubmit}
            value={question}
            onChangeText={setQuestion}
          />
          <NewHelpOrderButton onPress={handleSubmit}>
            Enviar pedido
          </NewHelpOrderButton>
        </Form>
      </Container>
    </Background>
  );
}
