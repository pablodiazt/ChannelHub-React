// dependencies:
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// ---- COMPONENTS / COMPONENT:
// ---- files:
import './style.css';


class Home extends Component {
    render() {
        return (
            <React.Fragment>


                {/* --------- FORM BOX */}
                <div class="formBox text-center">

                    {/* Brand Logo */}
                    <div class="navbar-brand">
                        <h2 class="logo-PrtOneForm">Channel</h2><h2 class="logo-PrtTwoForm">Hub</h2>
                    </div>

                    {/* Description */}
                    <p class="font-weight-bold text-secondary d-block">Sign up to start learning from your most relevant content.</p>

                    {/* Google Sign up*/}
                    <button type="button" class="btn btn-primary btn-sm formBtn font-weight-bold">Log in with Google Account</button>
                    <br></br>
                    <br></br>

                    <h6>OR</h6>
                    <br></br>


                    {/* form */}
                    <form>
                        {/* Email */}
                        <div class="form-group">
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"></input>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>

                        {/* Full Name */}
                        <div class="form-group">
                            <input type="name" class="form-control" id="exampleInputName" placeholder="Full Name"></input>
                        </div>

                        {/* Username */}
                        <div class="form-group">
                            <input type="username" class="form-control" id="exampleInputName" placeholder="Username"></input>
                        </div>

                        {/* Password */}
                        <div class="form-group">
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                        </div>

                        {/* Sign up */}
                        <button type="submit" class="btn btn-primary btn-sm formBtn font-weight-bold">Sign up</button>

                    </form>
                    {/* form end */}


                    <br></br>
                    {/* Terms and conditions */}
                    <small class="form-text text-muted">By signing up, you agree to our <a href="#" class="termsLink text-muted"><b>Terms and Conditions</b>.</a></small>

                </div>

                {/* --------- Sign in BOX */}
                <div class="signInBox text-center">
                    <p>Have an account? <a href="#" class="loginLink">Log in</a></p>
                </div>





            </React.Fragment>
        );
    }
}

export default Home;