import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Container, CheckInCount, DateTime } from './styles';

export default function CheckinList({ data }) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.createdAt), new Date(), {
      locale: pt,
    });
  }, [data.createdAt]);

  return (
    <Container>
      <CheckInCount>Check-in #{data.count}</CheckInCount>

      <DateTime>{dateParsed}</DateTime>
    </Container>
  );
}
