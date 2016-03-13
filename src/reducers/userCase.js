export const UPDATE_USER_CASE = 'UPDATE_USER_CASE';

import { customKey } from 'constants/cases';

export function updateUserCase(userCase) {
  return (dispatch, getState) => {
    const { inputs } = getState();

    if (!(userCase === customKey && (inputs.custom || inputs.name))) {
      dispatch({
        type: UPDATE_USER_CASE,
        userCase,
      });
    }
  };
}
