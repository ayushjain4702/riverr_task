import React, { useState } from 'react';
import TallyCounter from './TallyCounter';


const CounterContainer = () => {
  const [counters, setCounters] = useState([
    { count: 0, startValue: 0, counterName: 'Counter 1' },
  ]);

  const handleAddCounter = () => {
    const newCounter = { count: 0, startValue: 0, counterName: `Counter ${counters.length + 1}` };
    setCounters([...counters, newCounter]);
  };

  const handleRemoveCounter = (index) => {
    if (counters.length > 1) {
      const updatedCounters = [...counters];
      updatedCounters.splice(index, 1);
      setCounters(updatedCounters);
    }
  };

  const handleUpdateCounterName = (index, newName) => {
    const updatedCounters = [...counters];
    updatedCounters[index].counterName = newName;
    setCounters(updatedCounters);
  };

  return (
    <div>
      <button onClick={handleAddCounter} className='add'></button>
      <div className='counters-container'>
      {counters.map((counter, index) => (
        <div key={index} className="counters-wrapper">
          <TallyCounter
            counter={counter}
            onRemove={() => handleRemoveCounter(index)}
            onUpdateCounterName={(newName) => handleUpdateCounterName(index, newName)}
          />
        </div>
        ))}
      </div>
    </div>
  );
};

export default CounterContainer;
