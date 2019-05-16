import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  word: state.word,
  hits: state.hits
});

const ConnectedWord = ({ word, hits }) => {
  const letters = word.split('').map(letter => {
    if (letter.match(/[a-z]/i) && hits.includes(letter)) {
      return <span>{letter}</span>;
    } else {
      return <span>&nbsp;</span>;
    }
  });
  return (
    <div>
      {letters}
    </div>
  );
};

const Word = connect(mapStateToProps)(ConnectedWord);

export default Word;