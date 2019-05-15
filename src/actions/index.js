import types from '../action-types';

export function initGame({ difficulty }) {
  const payload = {
    mistakes: [],
    hits: []
  };
  return { type: types.INIT_GAME, payload };
}
