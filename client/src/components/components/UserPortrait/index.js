// dependencies:
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// ---- PAGES:
// ---- LAYOUT:
// ---- COMPONENTS / COMPONENT:
// ---- files:
import "./style.css";
import Portrait from "./portrait.png";


// window.addEventListener('load', function () {
//     document.querySelector('input[type="file"]').addEventListener('change', function () {
//         if(this.files && this.files[0]) {
//             var img = document.querySelector('img');  // $('img')[0]
//             img.src = URL.createObjectURL(this.files[0]); // set src to file url
//             img.onload = imageIsLoaded; // optional onload event listener
//         }
//     });
// });


class UserPortrait extends React.Component {
    render() {
        return (
            <React.Fragment>

                <img src={Portrait} width="100%" />

            </React.Fragment >
        );
    }
}


export default UserPortrait;