export const UPDATE_USER_CASE = 'UPDATE_USER_CASE';

export function updateUserCase(userCase) {
  return {
    type: UPDATE_USER_CASE,
    userCase,
  };
}
