export const UPDATE_USER_CASE = 'UPDATE_USER_CASE';
import { UPDATE_INPUTS } from 'reducers/inputs';

export const actions = {
  updateUserCase(userCase) {
    return {
      type: UPDATE_USER_CASE,
      userCase,
    };
  },
};

export default function reducer(state = 'case1', action) {
  switch (action.type) {
    case UPDATE_USER_CASE:
      return action.userCase;

    case UPDATE_INPUTS:
      return 'custom';

    default:
      return state;
  }
}
