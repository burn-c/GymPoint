import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Top,
  Status,
  StatusText,
  DateTime,
  Question,
} from './styles';

export default function HelpOrderList({ data, navigation }) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.createdAt), new Date(), {
      locale: pt,
    });
  }, [data.createdAt]);

  return (
    <Container
      onPress={() => navigation.navigate('Answer', { data, dateParsed })}
    >
      <Top>
        <Status>
          <Icon
            name="check-circle"
            size={16}
            color={data.answer ? '#3e3' : '#999'}
          />
          <StatusText colorAnswer={data.answer}>
            {data.answer ? 'Respondido' : 'Sem resposta'}
          </StatusText>
        </Status>
        <DateTime>{dateParsed}</DateTime>
      </Top>
      <Question>{data.question}</Question>
    </Container>
  );
}
