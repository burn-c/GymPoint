import { Alert } from 'react-native';
import { takeLatest, put, all } from 'redux-saga/effects';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { id } = payload;

    yield put(signInSuccess(id));
  } catch (err) {
    Alert.alert('Falha na autenticação', 'ID inválido!');

    yield put(signFailure());
  }
}

export function signOut() {}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
