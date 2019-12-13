// Manipular o estado
import produce from 'immer';

const INITIAL_STATE = {
  name: null,
  email: null,
  idade: null,
  peso: null,
  altura: null,
};

export default function student(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@student/CREATE_REQUEST': {
        draft.name = action.payload.name;
        draft.email = action.payload.email;
        draft.idade = action.payload.idade;
        draft.peso = action.payload.peso;
        draft.altura = action.payload.altura;
        break;
      }
      default:
    }
  });
}
