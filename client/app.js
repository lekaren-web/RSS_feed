import React from "react";
import Navbar from "../components/Navbar";
import Routes from "./routes";
import { Provider } from "react-redux";
import store from './store'
const App = () => {
  return (
    <Provider className="mainContainer" store={store}>
        <Navbar id="mySidenav" />
        <Routes id="main" style={{width: '100%'}} />
    </Provider>
  );
};

export default App;
