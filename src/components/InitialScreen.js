import React from 'react';
import { connect } from 'react-redux';
import { initGame } from '../actions';
import './InitialScreen.css';

const mapDispatchToProps = dispatch => ({
  initGame: options => { dispatch(initGame(options || {})) }
});

const ConnectedInitialScreen = ({ initGame }) => {
  const handleStartButtonClick = event => {
    initGame();
  };

  return (
    <div className="initial-screen">
      <div className="cover">
        <h1>DAS HANGMANN</h1>
        <h2>the best game I was able to make in a day</h2>
      </div>
      <div>
        <button onClick={handleStartButtonClick}>START</button>
        <button>HISTORY</button>
      </div>
    </div>
  );
};

const InitialScreen = connect(null, mapDispatchToProps)(ConnectedInitialScreen);

export default InitialScreen;