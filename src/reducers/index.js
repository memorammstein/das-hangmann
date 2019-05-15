import types from '../action-types';

const initialState = {
  in_progress: false,
  word: '',
  opportunities: 0,
  mistakes: [],
  hits: [],
  history: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case types.INIT_GAME:
      break;
    default:
      return state;
  }
};

export default rootReducer;
