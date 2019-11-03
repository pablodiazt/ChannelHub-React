// dependencies:
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// ---- files:
import "./style.css";


class LoginForm extends React.Component {
    render() {
        return (
            <React.Fragment>

                <div>
                    <h2>Login</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange} />
                        <br />

                        <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
                        <br />

                        <input type="submit" value="Submit" />
                    </form>
                </div>

            </React.Fragment >
        );
    }
}

export default LoginForm;