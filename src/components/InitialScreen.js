import React from 'react';

const InitialScreen = () => {
  return (
    <div className="initialScreen">
      <div className="cover">
        <h1>DAS HANGMANN</h1>
        <h2>the best game I was able to make in a day</h2>
      </div>
      <div>
        <button>START</button>
        <button>HISTORY</button>
      </div>
    </div>
  );
};

export default InitialScreen;