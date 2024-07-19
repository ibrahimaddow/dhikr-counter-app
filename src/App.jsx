import React, { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem('count');
    if (storedCount) {
      setCount(Number(storedCount));
    }
  }, []);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem('count', newCount.toString());
  };

  const handleDecrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      localStorage.setItem('count', newCount.toString());
    }
  };

  const handleReset = () => {
    setCount(0);
    localStorage.setItem('count', '0');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md border border-blue-500">
        <h1 className="text-3xl font-bold mb-4 text-center">Counter App</h1>
        <div className="mb-4 text-center text-2xl border border-blue-500 py-2 px-4 rounded">{count}</div>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-600" onClick={handleDecrement}>Decrement</button>
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-600" onClick={handleIncrement}>Increment</button>
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-600" onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default App;
