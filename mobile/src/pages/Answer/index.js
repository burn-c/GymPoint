import React from 'react';
import Background from '~/components/Background';
import Header from '~/components/Header';

import {
  Container,
  Top,
  QuestionTitle,
  Question,
  DateTime,
  AnswerTitle,
  AnswerText,
} from './styles';

export default function Answer({ navigation }) {
  const data = navigation.getParam('data');
  const dateParsed = navigation.getParam('dateParsed');

  return (
    <Background>
      <Header goBack navigation={navigation} />
      <Container>
        <Top>
          <QuestionTitle>Pergunta</QuestionTitle>
          <DateTime>{dateParsed}</DateTime>
        </Top>
        <Question>{data.question}</Question>
        <AnswerTitle>Resposta</AnswerTitle>
        <AnswerText>{data.answer}</AnswerText>
      </Container>
    </Background>
  );
}
