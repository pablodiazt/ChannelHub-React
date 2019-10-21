import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import Signup from './pages/signup';
import Login from './pages/login';

function App() {
    return (
	    <div className="App">
	    <BrowserRouter>
	    <Link to='/'>Home</Link>
	    <br />
	    <Link to='/signup'>Signup</Link>
	    <br />
	    <Link to='/logout'>Logout</Link>
	    <br />
	    <Link to='/login'>Login</Link>
	    <Route exact path='/' component={Home} />
	    <Route path='/signup' component={Signup} /> 
	    <Route path='/login' component={Login} />
	    <Route path='/logout' component={Logout} />
	</BrowserRouter>	    
	    </div>
    );
}

function Home() {
    var token = localStorage.getItem("jsonwebtoken");
    if (token !== null) {
	var decodedToken = jwt.decode(token);
	var username = decodedToken.username;
	return (
		<div>
		<h1> home</h1>
		<h3> Welcome, {username}!</h3>
		</div>
	);
    }
    return (
	    <div>
	    <h1> home</h1>
	    <h3> Please login to continue.</h3>
	    </div>
    );
}

function Logout() {
    localStorage.removeItem("jsonwebtoken");
    return (
	    <Redirect to='/' />
    );
}


export default App;
