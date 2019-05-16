import React from 'react';
import { connect } from "react-redux";
import './App.css';
import InitialScreen from './InitialScreen';
import GameScreen from './GameScreen';
import WinnerScreen from './WinnerScreen';
import LooserScreen from './LooserScreen';

const mapStateToProps = state => ({ status: state.status });

const ConnectedApp = ({ status }) => {
  switch (status) {
    case 'ongoing':
      return <GameScreen />;
    case 'won':
      return <WinnerScreen />;
    case 'lost':
      return <LooserScreen />;
    default:
      return <InitialScreen />;
  }
};

const App = connect(mapStateToProps)(ConnectedApp);

export default App;
