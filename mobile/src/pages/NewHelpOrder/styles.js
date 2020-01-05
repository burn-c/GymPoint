import styled from 'styled-components/native';
import Button from '~/components/Button';
import Input from '~/components/Input';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Form = styled.View`
  display: flex;
`;

export const TextBox = styled(Input)`
  height: auto;
  background: rgba(255, 255, 255, 0.4);
  margin: 30px;
  padding: 5px 10px 5px 0;
  border-radius: 4px;
  border: 1px;
  border-color: rgba(0, 0, 0, 0.2);
`;

export const NewHelpOrderButton = styled(Button)`
  margin: 0 30px 0 30px;
`;
