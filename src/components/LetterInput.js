import React, { useState } from 'react';
import './LetterInput.css';

const VALID_OPTIONS = 'abcdefghijklmnopqrstuvwxyz';

const LetterInput = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = event => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
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

export default LetterInput;