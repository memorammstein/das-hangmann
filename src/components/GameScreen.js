import React from 'react';
import Hangman from './Hangman';
import Word from './Word';
import Mistakes from './Mistakes';
import LetterInput from './LetterInput';

const GameScreen = () => {
  return(
    <div className="gameScreen">
      <Hangman />
      <Word />
      <Mistakes />
      <LetterInput />
    </div>
  );
};

export default GameScreen;