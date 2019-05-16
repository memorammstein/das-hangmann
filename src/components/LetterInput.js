import React, { useState } from 'react';
import { connect } from 'react-redux';
import { guessLetter } from '../actions';
import './LetterInput.css';

const VALID_OPTIONS = 'abcdefghijklmnopqrstuvwxyz';

const mapDispatchToProps = dispatch => ({
  guessLetter: letter => { dispatch(guessLetter(letter)); }
});

const ConnectedLetterInput = ({ guessLetter }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = event => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    guessLetter(selectedOption);
  };

  const options = VALID_OPTIONS.split('').map((option, index) => (
    <option value={option} key={index}>{option}</option>
  ));

  const selectLetter = (
    <select value={selectedOption} onChange={handleSelectChange}>
      <option value="" disabled>select something</option>
      {options}
    </select>
  );

  return (
    <div className="letter-input">
      <form onSubmit={handleSubmit}>
        <label>
          Select your letter:
          {selectLetter}
        </label>
        <input type="submit" value="let's try it"/>
      </form>
    </div>
  );
};

const LetterInput = connect(null, mapDispatchToProps)(ConnectedLetterInput);

export default LetterInput;