import React from 'react';
import { connect } from "react-redux";
import './App.css';
import InitialScreen from './InitialScreen';
import GameScreen from './GameScreen';

const mapStateToProps = state => ({ status: state.status });

const ConnectedApp = ({ status }) => {
  switch (status) {
    case 'ongoing':
      return <GameScreen />;
    case 'won':
    case 'lost':
    default:
      return <InitialScreen />;
  }
};

const App = connect(mapStateToProps)(ConnectedApp);

export default App;
