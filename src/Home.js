import React, { useState } from "react";

function Home() {
const [counter, setCounter] = useState(0);
  const handleClick = () => {
    console.log("Fuuuuck");
  };
//   const handleClickAgain = () => (
//     setCounter()
//   );
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter+1)}>Click Me again</button>
    </div>
  );
}

export default Home;
