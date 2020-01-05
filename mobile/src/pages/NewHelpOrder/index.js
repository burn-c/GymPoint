import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';
import api from '~/services/api';
import Background from '~/components/Background';
import Header from '~/components/Header';
import { Container, Form, TextBox, NewHelpOrderButton } from './styles';

export default function NewHelpOrder({ navigation }) {
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const id = useSelector(state => state.auth.id);

  async function handleSubmit() {
    try {
      setLoading(true);
      await api.post(`students/${id}/help_orders`, { question });
      navigation.navigate('HelpOrders');
      setLoading(false);
      Alert.alert('Enviado!', 'Pedido enviado com sucesso!');
    } catch (error) {
      setLoading(false);

      Alert.alert('Erro!', `${error.response.data.error}`);
    }
  }

  return (
    <Background>
      <Header goBack navigation={navigation} />
      <Container>
        <Form>
          <TextBox
            multiline
            numberOfLines={8}
            textAlignVertical="top"
            placeholder="Digite sua pergunta aqui..."
            onSubmitediting={handleSubmit}
            value={question}
            onChangeText={setQuestion}
          />
          <NewHelpOrderButton loading={loading} onPress={handleSubmit}>
            Enviar pedido
          </NewHelpOrderButton>
        </Form>
      </Container>
    </Background>
  );
}
