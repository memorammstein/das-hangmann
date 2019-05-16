import React, { useState } from 'react';

const validOptions = 'abcdefghijklmnopqrstuvwxyz';

const LetterInput = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = event => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  const options = validOptions.split('').map((option, index) => (
    <option value={option} key={index}>{option}</option>
  ));
  const selectLetter = (
    <select value={selectedOption} onChange={handleSelectChange}>
      <option value="" disabled>select something</option>
      {options}
    </select>
  );

  return (
    <div>
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