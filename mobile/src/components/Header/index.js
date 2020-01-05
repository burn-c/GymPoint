import React from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '~/assets/logoWhiteHeader.png';

import { Container, GoBackButton, Logo } from './styles';

export default function Header({ navigation, goBack }) {
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
    </Container>
  );
}
