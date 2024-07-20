import React, { useState, useEffect } from 'react';

const App = () => {
  // Define a state variable 'count' with initial value 0 and a function to update it 'setCount'
  const [count, setCount] = useState(0);

  // useEffect hook to run once when the component mounts
  useEffect(() => {
    // Retrieve the stored count value from localStorage
    const storedCount = localStorage.getItem('count');
    if (storedCount) {
      // If a stored count value exists, set it as the initial state
      setCount(Number(storedCount));
    }
  }, []); // Empty dependency array ensures this runs only once

  // Function to handle incrementing the count
  const handleIncrement = () => {
    const newCount = count + 1; // Calculate the new count
    setCount(newCount); // Update the state with the new count
    localStorage.setItem('count', newCount.toString()); // Store the new count in localStorage
  };

  // Function to handle decrementing the count
  const handleDecrement = () => {
    if (count > 0) { // Only decrement if count is greater than 0
      const newCount = count - 1; // Calculate the new count
      setCount(newCount); // Update the state with the new count
      localStorage.setItem('count', newCount.toString()); // Store the new count in localStorage
    }
  };

  // Function to handle resetting the count
  const handleReset = () => {
    setCount(0); // Reset the count state to 0
    localStorage.setItem('count', '0'); // Update localStorage to reflect the reset count
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md border border-blue-500">
        <h1 className="text-3xl font-bold mb-4 text-center"> Dhikr Counter App</h1>
        <div className="mb-4 text-center text-2xl border border-blue-500 py-2 px-4 rounded">{count}</div>
        <div className="flex space-x-4">
          {/* Button to decrement the count */}
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-600" onClick={handleCount}>Count</button>
          {/* Button to increment the count */}
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-600" onClick={handleIncrement}>Increment</button>
          {/* Button to reset the count */}
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-600" onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default App;
