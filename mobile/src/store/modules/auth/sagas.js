import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import { signInSuccess, signFailure } from './actions';

import api from '~/services/api';

export function* signIn({ payload }) {
  try {
    const { id } = payload;

    // const response = yield call(api.post, 'sessions', {
    //   email,
    //   password,
    // });

    // const { token, user } = response.data;

    // if (user.provider) {
    //   Alert.alert('Erro no login', 'Acesso apenas para estudantes!');
    // }

    // api.defaults.headers.Authorization = `Bearer ${token}`;
    yield put(signInSuccess(id));

    //  history.push('/students');
  } catch (err) {
    Alert.alert('Falha na autenticação', 'ID inválido!');

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  //  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
