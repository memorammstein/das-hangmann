import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hangman from './hangman';
import App from './components/App';

ReactDOM.render(<App hangman={Hangman} />, document.getElementById('root'));
