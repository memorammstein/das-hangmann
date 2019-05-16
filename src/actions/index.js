import types from '../action-types';
import getRandomWords from 'random-words';

export function initGame({ level }) {
  const payload = {
    status: 'ongoing',
    word: '',
    mistakes: [],
    hits: []
  };
  payload.word = getRandomWords({ exactly: level || 1, join: ' ' });
  return { type: types.INIT_GAME, payload };
}

export function guessLetter(letter) {
  return { type: types.GUESS_LETTER, payload: { letter } }
}