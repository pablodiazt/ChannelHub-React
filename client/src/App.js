// dependencies:
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// ---- COMPONENTS / PAGES:
import Home from "./components/pages/Home";



class App extends Component {
    render() {
        return (
            <React.Fragment>



                <Router>
                    <Route exact path="/" component={Home} />
                </Router>



            </React.Fragment>

        );
    }
}

export default App;