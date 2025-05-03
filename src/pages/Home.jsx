import React from "react";
import "../css/Home.css"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Blog</h1>
      <ul>
        <li>
          <Link to="/posts/1">Go to Post 1</Link>
        </li>
        <li>
          <Link to="/posts/2">Go to Post 2</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
