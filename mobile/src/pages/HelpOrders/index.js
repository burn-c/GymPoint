import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
// import { Container } from './styles';

export default function HelpOrders() {
  return <Background />;
}

HelpOrders.navigationOptions = {
  tabBarLabel: 'Pedir ajuda',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="live-help" size={20} color={tintColor} />
  ),
};
