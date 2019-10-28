// dependencies:
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import axios from 'axios';

// ---- COMPONENTS:
// files:
import "./style.css";


class ContentCard extends Component {
    render() {
        return (
            <React.Fragment>


                <div class="view overlay z-depth-1-half">
                    <img src="https://youtu.be/hrZqiCUx6kg" class="img-fluid vidImage"
                        alt="">
                    </img>
                    <a href="">
                        <div class="mask rgba-white-light"></div>
                    </a>
                </div>


                <div class="view overlay z-depth-1-half">
                    <iframe class="img-fluid vidImage" src="https://www.youtube.com/embed/hrZqiCUx6kg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    {/* <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(78).jpg" class="img-fluid"
                                    alt=""></img> */}
                    <a href="">
                        <div class="mask rgba-white-light"></div>
                    </a>
                </div>


            </React.Fragment >
        );
    }
}

export default ContentCard;