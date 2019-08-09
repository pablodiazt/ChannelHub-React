import React, { Component } from "react";
// import { ToastContainer } from "react-toastify";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
// import NavBar from "./components/layout/Navbar/Navbar";
// import Footer from "./components/layout/Footer/Footer";    

class App extends Component {
  render() {
    return (
        <div>
            <div>
                <h2>Welcome to Your Time</h2>
            </div>
            <h2>ssss</h2>
            <p>sdklfhslfh</p>
            <Home />
        </div>
        

    );
  }
}

export default App;