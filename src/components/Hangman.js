import React from 'react';
import { connect } from 'react-redux';
import './Hangman.css';

const mapStateToProps = state => ({
  numberOfMistakes: state.mistakes.length,
  opportunities: state.opportunities
});

const ConnectedHangman = ({ numberOfMistakes, opportunities }) => {
  const notDeadView = (
    <div className="hangman not-dead">
      <span>chances left for you: <strong>{opportunities - numberOfMistakes}</strong></span>
      <br />
      <span>get it right or start saying bye-bye</span>
    </div>
  );
  const deadView = (
    <div className="hangman dead">
      <span>You're dead my friend</span>
      <br />
      <span>¯\_(ツ)_/¯</span>
    </div>
  );
  return numberOfMistakes === opportunities ? deadView : notDeadView;
};

const Hangman = connect(mapStateToProps)(ConnectedHangman);

export default Hangman;