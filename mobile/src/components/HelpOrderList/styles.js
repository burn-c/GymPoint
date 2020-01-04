import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 4px;
  background: #fff;

  display: flex;
  flex-direction: column;
`;
export const Top = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Status = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
`;

export const StatusText = styled.Text`
  font-size: 14px;
  color: ${props => (props.colorAnswer ? '#3e3' : '#999')};
  margin-left: 5px;
`;

export const DateTime = styled.Text`
  font-size: 14px;
  color: #999;
`;

export const Question = styled.Text`
  font-size: 13px;
  color: #333;
`;
