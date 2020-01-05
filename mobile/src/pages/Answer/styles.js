import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 4px;
  background: #fff;

  display: flex;
  flex-direction: column;
  margin: 10px;
  margin-top: 10px;
`;

export const Top = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const QuestionTitle = styled.Text`
  font-size: 14px;
  color: #000;
  font-weight: bold;
`;

export const Question = styled.Text`
  font-size: 13px;
  color: #333;
  margin-bottom: 10px;
`;

export const DateTime = styled.Text`
  font-size: 14px;
  color: #999;
`;

export const AnswerTitle = styled.Text`
  font-size: 14px;
  color: #000;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const AnswerText = styled.Text`
  font-size: 13px;
  color: #333;
  margin-bottom: 10px;
`;
