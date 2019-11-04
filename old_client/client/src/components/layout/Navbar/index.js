// dependencies:
import React from "react";
// ---- COMPONENTS / COMPONENT:
// import { Link, NavLink } from "react-router-dom";
// ---- files:
import "./style.css";



const NavBar = () => {
    return (
        <React.Fragment>



            <nav class="navbar-expand-sm navbarTop">

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>


                        <li class="nav-item">
                            <a class="nav-link" href="#">HTML</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">CSS</a>
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


            {/* <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand brand-title" to="#">
          Home Pajjge - Build your playlists
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link heading-title" to="/search">
                Search
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link heading-title" to="/saved">
                Saved
              </NavLink>
            </li>
          </ul>
        </div>
      </nav> */}



        </React.Fragment>
    );
};

export default NavBar;