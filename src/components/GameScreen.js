import React from 'react';
import Hangman from './Hangman';
import Word from './Word';
import Mistakes from './Mistakes';
import LetterInput from './LetterInput';
import './GameScreen.css';

const GameScreen = () => {
  return(
    <div className="game-screen">
      <Hangman />
      <Word />
      <Mistakes />
      <LetterInput />
    </div>
  );
};

export default GameScreen;