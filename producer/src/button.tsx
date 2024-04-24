import { useState } from "react";

export function Button() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount((old) => old + 1)}>
      Provided button ({count})
    </button>
  );
}
