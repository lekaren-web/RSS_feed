import React from "react";
import Navbar from "../components/Navbar";
import Routes from "./routes";
import { Provider } from "react-redux";
import store from './store'
const App = () => {
  return (
    <Provider store={store}>
      <div className="mainContainer">
        <Navbar id="mySidenav" />
        <Routes id="main" />
      </div>
    </Provider>
  );
};

export default App;
