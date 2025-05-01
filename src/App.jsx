import React from "react";
import logo from "./assets/logo.png";
import "./App.css";

const App = ({ serverTime }) => {
  console.log('Logo path:', logo);  // Log the image path
  const func = () => {
    console.log("Hiii");
  };
  return (
    <div>
      <p className="timer">This is Server Time: {serverTime}</p>
      <button onClick={func}>Click Me</button>
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default App;
