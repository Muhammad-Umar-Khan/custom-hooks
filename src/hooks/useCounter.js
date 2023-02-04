const { useState, useEffect } = require("react");

const useCounter = (updateFunction) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(updateFunction);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [updateFunction]);
  return counter;
};

export default useCounter;
