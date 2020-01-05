import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  height: 30px;
  background: #e9498a;
  margin-bottom: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const GoBackButton = styled.View`
  position: absolute;
  left: 0px;
`;

export const Logo = styled.Image`
  width: 100px;
  height: 20px;
`;

export const LogOutButton = styled.View`
  position: absolute;
  right: 10px;
`;

export const LogOutButtonText = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #740001;
`;
