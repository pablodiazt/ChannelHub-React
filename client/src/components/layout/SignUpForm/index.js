// dependencies:
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import axios from 'axios';

// ---- COMPONENTS:
// files:


import './style.css';


class Home extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         email: '',
    //         username: '',
    //         password: '',
    //         passwordVerify: '',
    //         redirect: false
    //     };

    //     // setup event listensers
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    // // changes state in real time based on object that changed
    // handleChange(event) {
    //     const target = event.target;
    //     const value = target.value;
    //     const name = target.name;

    //     this.setState({
    //         [name]: value
    //     });
    // }

    // // handle submission button click, will redirect to home if successfully posts when page is re-rendered
    // handleSubmit(event) {
    //     console.log(this.state);
    //     var self = this;
    //     axios.post("/api/accounts/register", this.state)
    //         .then(function (response) {
    //             console.log(response.data);
    //             if(response.status === 200) {
    //                 alert("Account Created Successfully!");
    //                 self.setState({ redirect: true });
    //             }
    //         })
    //         .catch(function (error) {
    //             console.log(error)
    //         });

    //     event.preventDefault();
    // }

    render() {
        // if(this.state.redirect) {
        //     return (<Redirect to={{ pathname: '/', state: 'Account Created. Please verify your email address and login' }} />);
        // }
        return (
            <React.Fragment>


                {/* --------- FORM BOX */}
                < div class="formBox text-center" >

                    {/* Brand Logo */}
                    < div class="navbar-brand" >
                        <h2 class="logo-PrtOneForm">Channel</h2> <h2 class="logo-PrtTwoForm">Hub</h2>
                    </div >

                    {/* Description */}
                    < p class="font-weight-bold text-secondary d-block" > Sign up to start learning from your most relevant content.</p >


                    <button type="button" class="btn btn-primary btn-sm formBtn font-weight-bold">Log in with Google Account</button>
                    <br></br>
                    <br></br>

                    <h6>OR</h6>
                    <br></br>


                    {/* form */}
                    <form>
                        {/* Email */}
                        <input type="email" class="form-control" name="email" onChange={this.handleChange} /* value={this.state.email} */ id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"></input>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>

                        {/* Username */}
                        <input type="text" name="username" onChange={this.handleChange} /* value={this.state.username} */ class="form-control" id="exampleInputName" placeholder="Username"></input>

                        {/* Password */}
                        <input type="password" name="password" onChange={this.handleChange} /* value={this.state.password} */ class="form-control" id="exampleInputPassword1" placeholder="Password"></input>

                        {/* Password */}
                        <input type="password" name="passwordVerify" onChange={this.handleChange} /* value={this.state.passwordVerify} */ class="form-control" id="exampleInputPassword1" placeholder="Verify Password"></input>

                        {/* Sign up */}
                        <button type="submit" value="Submit" class="btn btn-primary btn-sm formBtn font-weight-bold">Sign up</button>

                    </form>
                    {/* form end */}


                    <br></br>
                    {/* Terms and conditions */}
                    <small class="form-text text-muted">By signing up, you agree to our <a href="#" class="termsLink text-muted"><b>Terms and Conditions</b>.</a></small>

                </div >

                {/* --------- Sign in BOX */}
                < div class="signInBox text-center" >
                    <p>Have an account? <a href="#" class="loginLink">Log in</a></p>
                </div >



            </React.Fragment >
        );
    }
}

export default Home;
