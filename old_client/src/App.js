// dependencies:
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// ---- PAGES:
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
// ---- LAYOUT:
// ---- files:
import './App.css';




function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/signup" component={SignUp} />
                </Switch>
            </div>
        </Router>
    );
}


// class App extends Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <Router>
//                     {/* <Route exact path="/" component={Home} /> */}
//                     <Route exact path="/" component={SignUp} />
//                     <Route path="/login" component={Home} />
//                 </Router>

//             </React.Fragment>
//         );
//     }
// }

export default App;


// Class SearchBar extends Component {
//     constructor(props) {
//      super(props);this.state = { term: '' };
//     }render() {
//      return (
//       <div className="search-bar">
//       <input 
//       value={this.state.term}
//       onChange={event => this.onInputChange(event.target.value)} />
//       </div>
//       );
//     }onInputChange(term) {
//      this.setState({term});
//      this.props.onSearchTermChange(term);
//     }
//    }