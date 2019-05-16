import React from 'react';
import { connect } from 'react-redux';
import './Mistakes.css';

const mapStateToProps = state => ({
  mistakes: state.mistakes
});

const ConnectedMistakes = ({ mistakes }) => {
  const letters = mistakes.map((letter, index) => {
    return <span key={index}>{letter}</span>;
  })
  return (
    <div className="mistakes-container">
      <div>Mistakes you've made:</div>
      <div className="mistakes">{letters}</div>
    </div>
  );
};

const Mistakes = connect(mapStateToProps)(ConnectedMistakes);

export default Mistakes;