import React from 'react';
import { BrowserRouter, Redirect } from 'react-router-dom';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
	super(props);
	this.state = {username: '',
		      password: '',
		      redirect: false };

	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
	const target = event.target;
	const value = target.value;
	const name = target.name;

	this.setState({
	    [name]: value
	});
    }

    handleSubmit(event) {
	console.log(this.state);
	var self = this;
	axios.post("/api/accounts/login", this.state)
	     .then(function (response) {
		 console.log(response.data);
		 if (response.status === 200) {
		     alert("Logged in!");
		     
		     self.setState({redirect: true});
		 }
		 else {
		     alert(response.data)
		 }
	     })
	     .catch(function(error) {
		 console.log(error)
	     });
	
	event.preventDefault();
    }
    
    render () {
	if (this.state.redirect) {
	    return( <Redirect to={{pathname: '/', state: 'Account Created. Please verify your email address and login'}} />);
	}
	return (
		<div>
		<h2>Login</h2>
	    <form onSubmit={this.handleSubmit}>
		<input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange} />
		<br />
		<input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/>
		<br />
	    <input type="submit" value="Submit" /> 
	    </form>
	    </div>
	);
    }
}

export default Login;
