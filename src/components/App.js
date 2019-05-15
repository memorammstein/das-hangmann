import React from 'react';
import { connect } from "react-redux";
import './App.css';
import InitialScreen from './InitialScreen';
import GameScreen from './GameScreen';

const mapStateToProps = state => ({ inProgress: state.inProgress });

const ConnectedApp = ({ inProgress }) => {
  if (inProgress) {
    return <GameScreen />;
  } else {
    return <InitialScreen />;
  }
};

const App = connect(mapStateToProps)(ConnectedApp);

export default App;
