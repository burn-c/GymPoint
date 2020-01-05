import React from 'react';
import { useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '~/assets/logoWhiteHeader.png';

import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  GoBackButton,
  Logo,
  LogOutButton,
  LogOutButtonText,
} from './styles';

export default function Header({ navigation, goBack }) {
  const dispatch = useDispatch();

  function handleLogOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <GoBackButton>
        {goBack && (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('HelpOrders');
            }}
          >
            <Icon name="chevron-left" size={20} color="#FFF" />
          </TouchableOpacity>
        )}
      </GoBackButton>
      <Logo source={logo} />
      <LogOutButton>
        <TouchableOpacity onPress={handleLogOut}>
          <LogOutButtonText>LogOut</LogOutButtonText>
        </TouchableOpacity>
      </LogOutButton>
    </Container>
  );
}
