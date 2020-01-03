import React from 'react';
import { Image } from 'react-native';

import Background from '~/components/Background';
import logo from '~/assets/logoWhite.png';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function SignIn() {
  function handleSubmit() {}
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="perm-identity"
            keyboardType="number-pad"
            autoCorrect={false}
            returnKeyType="send"
            onSubmitediting={handleSubmit}
            placeholder="Informe seu ID de cadastro"
          />

          <SubmitButton onPress={handleSubmit}>Entrar no sistema</SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}