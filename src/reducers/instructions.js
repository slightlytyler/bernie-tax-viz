export const HIDE_INSTRUCTIONS = 'HIDE_INSTRUCTIONS';

export const actions = {
  hideInstructions() {
    return { type: HIDE_INSTRUCTIONS };
  },
};

export default function reducer(state = { hidden: false }, action) {
  switch (action.type) {
    case HIDE_INSTRUCTIONS:
      return { hidden: true };

    default:
      return state;
  }
}
