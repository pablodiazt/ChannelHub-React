// dependencies:
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link, matchPath } from "react-router-dom";

// ---- files:
import "./style.css";


class NavBar extends Component {
    render() {

        // match specific user profile and say hello to him
        const Profile = ({ match, loading }) => {
            if(loading) return <div>Loading...</div>;
            return <div>You're on the Profile {match.params.profileId}</div>;
        };

        // select profile
        const SelectProfile = () => <div>Select a Profile</div>;

        // match path name
        const getParams = pathname => {
            const matchProfile = matchPath(pathname, {
                // path: `/profile/:profileId`,
                path: '/profile',
            });
            return (matchProfile && matchProfile.params) || {};
        };


        class App extends Component {
            state = {
                loading: false,
            };
            componentDidUpdate(prevProps, prevState) {
                const { pathname } = this.props.location;
                const { pathname: prevPathname } = prevProps.location;

                const currentParams = getParams(pathname);
                const prevParams = getParams(prevPathname);

                if(currentParams.profileId && currentParams.profileId !== prevParams.profileId) {
                    clearTimeout(this.timeout);
                    this.setState({
                        loading: true,
                    });
                    this.timeout = setTimeout(() => {
                        this.setState({
                            loading: false,
                        });
                    }, 500);
                }
            }
            componentWillUnmount() {
                clearTimeout(this.timeout);
            }

            render() {
                return (
                    <div>
                        <div className="links">
                            <Link to="/profile" className="link">
                                Home
                    </Link>
                            <Link to="/profile/1" className="link">
                                Profile 1
                    </Link>
                            <Link to="/profile/2" className="link">
                                Profile 2
                    </Link>
                        </div>
                        <div className="tabs">
                            <Switch>
                                <Route path="/profile" exact component={SelectProfile} />
                                <Route
                                    path="/profile/:profileId"
                                    render={props => {
                                        return <Profile {...props} loading={this.state.loading} />;
                                    }}
                                />
                            </Switch>
                        </div>
                    </div>
                );
            }
        }




        return (
            <React.Fragment>

                <nav class="navbar-expand-sm navbarTop">

                    {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> */}

                    <div>
                        <ul class="navbar-nav navLinks">

                            <li class="nav-item active">
                                <a class="nav-link" href="profile/channels">Channels <span class="sr-only">(current)</span></a>
                            </li>


                            <li class="nav-item">
                                <a class="nav-link" href="profile/playlist">Playlists</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Videos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">JS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">PHP</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Python</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">SQL</a>
                            </li>

                        </ul>
                    </div>
                </nav>

            </React.Fragment>
        );

    }
};

export default NavBar;