import React from 'react';
import { connect } from 'react-redux';
import { initGame } from '../actions';
import './InitialScreen.css';

const mapStateToProps = state => ({
  history: state.history
});

const mapDispatchToProps = dispatch => ({
  initGame: options => { dispatch(initGame(options || {})) }
});

const ConnectedInitialScreen = ({ initGame, history }) => {
  const handleStartButtonClick = event => {
    initGame();
  };

  const handleHistoryButtonClick = event => {
    window.alert('Your history:\n\n' + JSON.stringify(history, null, 4));
  };

  return (
    <div className="initial-screen">
      <div className="cover">
        <h1>DAS HANGMANN</h1>
        <h2>the best game I was able to make in a day</h2>
      </div>
      <div>
        <button onClick={handleStartButtonClick}>START</button>
        <button onClick={handleHistoryButtonClick}>HISTORY</button>
      </div>
    </div>
  );
};

const InitialScreen = connect(mapStateToProps, mapDispatchToProps)(ConnectedInitialScreen);

export default InitialScreen;