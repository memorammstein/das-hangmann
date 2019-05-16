import React from 'react';
import { connect } from 'react-redux';
import { initGame } from '../actions';
import './LooserScreen.css';

const mapDispatchToProps = dispatch => ({
  initGame: options => { dispatch(initGame(options || {})) }
});

const ConnectedLooserScreen = ({ initGame }) => {
  const handleStartButtonClick = event => {
    initGame();
  };

  return(
    <div className="looser-screen">
      <span>You're dead my friend <br /> ¯\_(ツ)_/¯</span>
      <br />
      <button onClick={handleStartButtonClick}>NEW GAME</button>
    </div>
  );
};

const LooserScreen = connect(null, mapDispatchToProps)(ConnectedLooserScreen);

export default LooserScreen;