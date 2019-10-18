import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Signup from './pages/signup';
import Login from './pages/login';
function App() {
    return (
	    <div className="App">
	    <BrowserRouter>
	    <Link to='/'>Home</Link>
	    <br />
	    <Link to='/signup'>Signup</Link>
	    <Route exact path='/' component={Home} />
	    <Route path='/signup' component={Signup} /> 
	    <Route path='/login' component={Login} />
	</BrowserRouter>	    
	    </div>
    );
}

function Home() {
    var token = localStorage.getItem("jsonwebtoken");
    if (token !== null) {
	return (
		<div>
		<h1> home</h1>
		<h3> logged in successfully!</h3>
		</div>
	);
    }
    return (
	    <div>
	    <h1> home</h1>
	    </div>
    );
}


export default App;
