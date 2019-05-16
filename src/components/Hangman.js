import React from 'react';
import { connect } from 'react-redux';
import './Hangman.css';

const mapStateToProps = state => ({
  numberOfMistakes: state.mistakes.length,
  opportunities: state.opportunities
});

const ConnectedHangman = ({ numberOfMistakes, opportunities }) => {
  return (
    <div className="hangman">
      <span>chances left for you: <strong>{opportunities - numberOfMistakes}</strong></span>
      <br />
      <span>get it right or start saying bye-bye</span>
    </div>
  );
};

const Hangman = connect(mapStateToProps)(ConnectedHangman);

export default Hangman;