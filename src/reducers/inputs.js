// Constants
const UPDATE_INPUTS = 'UPDATE_INPUTS';

// Actions
export const actions = {
  updateInputs: (key, val) => ({ type: UPDATE_INPUTS, key, val }),
};

// Reducers
export default function (state = {}, action) {
  switch (action.type) {
    case UPDATE_INPUTS:
      return Object.assign({}, state, { [action.key]: action.val });

    default:
      return state;
  }
}
