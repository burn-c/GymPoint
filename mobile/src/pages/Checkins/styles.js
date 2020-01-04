import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const NewButton = styled(Button)`
  margin: 0 30px 0 30px;
`;

export const CheckinsList = styled.FlatList.attrs({
  showsVerticalScrolllIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;
