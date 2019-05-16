import React from 'react';
import { connect } from 'react-redux';
import './Word.css';

const mapStateToProps = state => ({
  word: state.word,
  hits: state.hits
});

const ConnectedWord = ({ word, hits }) => {
  const letters = word.split('').map((letter, index) => {
    if (letter.match(/[a-z]/i)) {
      return <span className="hint" key={index}>{hits.includes(letter) ? letter : null}</span>;
    } else {
      return <span key={index}>{letter}</span>;
    }
  });
  return (
    <div className="word">
      {letters}
    </div>
  );
};

const Word = connect(mapStateToProps)(ConnectedWord);

export default Word;