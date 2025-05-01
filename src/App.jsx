import React from "react";

const App = ({ serverTime }) => {
  const func = () => {
    console.log("Hiii");
  };
  return (
    <div>
      <button onClick={func}>Click Me</button>
      <p>This is Server Time: {serverTime}</p>
    </div>
  );
};

export default App;
