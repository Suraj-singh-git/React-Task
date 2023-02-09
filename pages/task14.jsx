import React, { useEffect, useState } from "react";

function task14() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [count]);
  return <div>{count}</div>;
}

export default task14;
