import types from '../action-types';
import getRandomWords from 'random-words';

export function initGame({ level }) {
  const payload = {
    in_progress: true,
    word: '',
    mistakes: [],
    hits: []
  };
  payload.word = getRandomWords({ exactly: level || 1, join: ' ' });
  return { type: types.INIT_GAME, payload };
}