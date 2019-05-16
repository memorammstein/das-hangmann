import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  word: state.word,
  hits: state.hits
});

const ConnectedWord = ({ word, hits }) => {
  const letters = word.split('').map((letter, index) => {
    if (letter.match(/[a-z]/i) && hits.includes(letter)) {
      return <span key={index}>{letter}</span>;
    } else {
      return <span key={index}>&nbsp;</span>;
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