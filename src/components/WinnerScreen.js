import React from 'react';
import { connect } from 'react-redux';
import { reset } from '../actions';
import './WinnerScreen.css';

const mapDispatchToProps = dispatch => ({
  reset: () => { dispatch(reset()) }
});

const ConnectedWinnerScreen = ({ reset }) => {
  const handleStartButtonClick = event => {
    reset();
  };

  return(
    <div className="winner-screen">
      <span>YOU HAVE WON <br />💯</span>
      <br />
      <button onClick={handleStartButtonClick}>BACK TO MAIN</button>
    </div>
  );
};

const WinnerScreen = connect(null, mapDispatchToProps)(ConnectedWinnerScreen);

export default WinnerScreen;