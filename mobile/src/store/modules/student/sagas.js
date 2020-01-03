import { takeLatest, call, put, all } from 'redux-saga/effects';

import { studentCreateFailure } from './actions';

// import history from '~/services/history';
import api from '~/services/api';

export function* studentCreate({ payload }) {
  try {
    const { name, email, idade, peso, altura } = payload;
    console.tron.log(payload);
    yield call(api.post, 'students', {
      name,
      email,
      idade,
      peso,
      altura,
    });

    // history.push('/students');
    //  toast.success('Estudante cadatrado com sucesso!');
  } catch (err) {
    //  toast.error('Falha no cadastro!');
    yield put(studentCreateFailure());
  }
}

export default all([takeLatest('@student/CREATE_REQUEST', studentCreate)]);
