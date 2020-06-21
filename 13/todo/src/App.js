import React, { useState } from 'react';
import Header from './header';

function App() {
  const [countNumber, setCountNumber] = useState(0);
  function addcountNumber(){
    setCountNumber(countNumber+1);
  }
  
  return (
    <div className="App">
      <Header />
      <div>{countNumber}</div>
      <button onclick={addcountNumber}>플러스</button>
    </div>
  );
}

export default App;
