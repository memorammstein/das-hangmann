import types from '../action-types';

const initialState = {
  in_progress: false,
  word: '',
  opportunities: 7,
  mistakes: [],
  hits: [],
  history: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case types.INIT_GAME:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default rootReducer;
