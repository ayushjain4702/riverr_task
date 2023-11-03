import React, { useState } from 'react';

const TallyCounter = ({ counter, onRemove, onUpdateCounterName }) => {
  const { count, startValue, counterName } = counter;
  const [localCount, setLocalCount] = useState(count);
  const [newCounterName, setNewCounterName] = useState(counterName);
  const [isEditingName, setIsEditingName] = useState(false);

  const handleIncrement = () => {
    setLocalCount(localCount + 1);
  };

  const handleDecrement = () => {
    if (localCount > 0) {
      setLocalCount(localCount - 1);
    }
  };

  const handleReset = () => {
    setLocalCount(0);
  };

  const handleSetStartValue = () => {
    const newValue = prompt('Enter the start value:', startValue);
    if (!isNaN(newValue)) {
      setLocalCount(parseInt(newValue, 10));
    }
  };

  const handleEditCounterName = () => {
    setIsEditingName(true);
  };

  const handleSaveCounterName = () => {
    onUpdateCounterName(newCounterName);
    setIsEditingName(false);
  };

  return (
    <div className="tally-counter">
      {isEditingName ? (
        <input
          type="text"
          value={newCounterName}
          onChange={(e) => setNewCounterName(e.target.value)}
        />
      ) : (
        <h2>{counterName}</h2>
      )}
      <div className="count">{localCount}</div>
      <div className="buttons">
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleSetStartValue}>Start Value</button>
        {isEditingName ? (
          <button onClick={handleSaveCounterName}>Save Name</button>
        ) : (
          <button onClick={handleEditCounterName}>Edit Name</button>
        )}
        <button onClick={onRemove}>Delete</button>
      </div>
    </div>
  );
};

export default TallyCounter;
