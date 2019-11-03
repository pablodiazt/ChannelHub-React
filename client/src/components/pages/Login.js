// dependencies:
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirect: false,
            autherror: ''
        };

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
                if(response.status === 200) {
                    //alert("Logged in!");
                    localStorage.setItem("jsonwebtoken", response.data.token);
                    self.setState({ redirect: true });
                }
            })
            .catch(function (error) {
                self.setState({ autherror: "This username and password combination is incorrect" });
                console.log(error)
            });

        event.preventDefault();
    }

    render() {
        if(this.state.redirect) {
            return (<Redirect to={{ pathname: '/', state: '' }} />);
        }
        return (
            <React.Fragment>

                {/* --------- FORM BOX */}
                <div class="formBox text-center">

                    {/* Brand Logo */}
                    <div class="navbar-brand">
                        <h2 class="logo-PrtOneForm">Channel</h2> <h2 class="logo-PrtTwoForm">Hub</h2>

                    </div>

                    <h2 class="font-weight-bold text-secondary d-block">Login</h2>
                    <br />
                    <p style={{ color: 'red' }}>{this.state.autherror}</p>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange} class="form-control" id="exampleInputName" />                        <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} class="form-control" id="exampleInputPassword1" />
                        <br />
                        <button type="submit" value="Submit" class="btn btn-primary btn-sm formBtn font-weight-bold">Log In</button>
                    </form>
                </div >
                <div class="signInBox text-center" >
                    <p>Don't have an account? <Link to='/signup' class="loginLink">Create an Account!</Link></p>
                </div>

            </React.Fragment>
        );
    }
}

export default Login;
