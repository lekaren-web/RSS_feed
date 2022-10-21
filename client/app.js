import React from "react";
import Navbar from "../components/Navbar";
import Routes from "./routes";
const App = () => {
  return (
    <div className="mainContainer">
      <Navbar id='mySidenav' />
      <Routes id='main' />
    </div>
  );
};

export default App;
