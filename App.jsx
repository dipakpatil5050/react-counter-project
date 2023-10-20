import React, { useState } from "react";
function App() {
  // let counter = 15;

  let [counter, setCounter] = useState(5);

  const addValue = () => {
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter);
      console.log("Click", counter);
    }
  };

  const RemoveValue = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
      console.log("Click", counter);
    }
    if (counter === 0) {
      console.error("can't remove value below 0");
    }
  };

  return (
    <>
      <h1>counter Aur react</h1>
      <h2>counter Value : {counter} </h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={RemoveValue}>remove Value {counter} </button>
      <p>footer : {counter}</p>
    </>
  );
}

export default App;
