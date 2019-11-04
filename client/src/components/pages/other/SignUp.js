// dependencies:
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import axios from 'axios';

// ---- LAYOUTS:
import SignUpForm from "../../layouts/SignUpForm";
// ---- COMPONENTS:


class SignUp extends Component {
    //     constructor(props) {
    //         super(props);
    //         this.state = {
    //             email: '',
    //             username: '',
    //             password: '',
    //             passwordVerify: '',
    //             redirect: false
    //         };

    //         this.handleChange = this.handleChange.bind(this);
    //         this.handleSubmit = this.handleSubmit.bind(this);
    //     }

    //     handleChange(event) {
    //         const target = event.target;
    //         const value = target.value;
    //         const name = target.name;

    //         this.setState({
    //             [name]: value
    //         });
    //     }

    //     handleSubmit(event) {
    //         console.log(this.state);
    //         var self = this;
    //         axios.post("/api/accounts/register", this.state)
    //             .then(function (response) {
    //                 console.log(response.data);
    //                 if(response.status === 200) {
    //                     alert("Account Created Successfully!");
    //                     self.setState({ redirect: true });
    //                 }
    //                 else {
    //                     alert(response.data)
    //                 }
    //             })
    //             .catch(function (error) {
    //                 console.log(error)
    //             });

    //         event.preventDefault();
    //     }

    //     render() {
    //         if(this.state.redirect) {
    //             return (<Redirect to={{ pathname: '/', state: 'Account Created. Please verify your email address and login' }} />);
    //         }
    //         return (
    //             <div>
    //                 <h2>Create an Account</h2>
    //                 <form onSubmit={this.handleSubmit}>
    //                     <input type="text" placeholder="email" name="email" value={this.state.email} onChange={this.handleChange} />
    //                     <br />
    //                     <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange} />
    //                     <br />
    //                     <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
    //                     <br />
    //                     <input type="Password" placeholder="Verify Password" name="passwordVerify" value={this.state.passwordVerify} onChange={this.handleChange} />
    //                     <br />
    //                     <input type="submit" value="Submit" />
    //                 </form>
    //             </div>
    //         );
    //     }


    // components
    render() {
        return (
            <React.Fragment>
                <SignUpForm />
            </React.Fragment>
        );
    }
}


export default SignUp;
