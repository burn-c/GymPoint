export function studentCreateRequest(name, email, idade, peso, altura) {
  return {
    type: '@student/CREATE_REQUEST',
    payload: { name, email, idade, peso, altura },
  };
}

export function studentCreateFailure() {
  return {
    type: '@student/CREATE_REQUEST_FAILURE',
  };
}

export function studentDeleteRequest(id) {
  return {
    type: '@student/DELETE_REQUEST',
    payload: { id },
  };
}

export function studentDeleteFailure() {
  return {
    type: '@student/DELETE_REQUEST_FAILURE',
  };
}
