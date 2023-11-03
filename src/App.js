import React from 'react';
import './App.css'; // You can import your CSS file here
import CounterContainer from './Components/CounterContainer'; // Import the CounterContainer component

function App() {
  return (
    <div className="App">
      {/* <h1>Multiple Counters App</h1> */}
      <CounterContainer />
    </div>
  );
}

export default App;
