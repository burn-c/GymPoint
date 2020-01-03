import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import student from './student/sagas';

export default function* rootSafa() {
  return yield all([auth, user, student]);
}
