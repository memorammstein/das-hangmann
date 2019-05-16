import types from '../action-types';

const initialState = {
  status: '',
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
    case types.GUESS_LETTER:
      return Object.assign({}, state, guessLetter(state, action.payload.letter));
    default:
      return state;
  }
};

export default rootReducer;

function guessLetter(state, letter) {
  const partialState = {};
  if (state.word.includes(letter)) {
    partialState.hits = state.hits.concat(letter);
    let hasWon = true;
    const wordSet = new Set(state.word);
    for (const letter of wordSet) {
      if (letter.match(/[a-z]/i) && state.hits.includes(letter) === false) {
        hasWon = false;
      }
    }
    if (hasWon) {
      partialState.status = 'won';
    }
  } else {
    partialState.mistakes = state.mistakes.concat(letter);
    if (partialState.mistakes.length === state.opportunities) {
      partialState.status = 'lost';
    }
  }
  if (partialState.status !== 'ongoing') {
    partialState.history = state.history.concat({
      word: state.word,
      mistakes: state.mistakes,
      hits: state.hits
    });
  }
  return partialState;
}