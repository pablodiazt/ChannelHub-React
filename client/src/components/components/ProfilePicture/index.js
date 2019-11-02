// dependencies:
import React, { Component } from "react";
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// ---- COMPONENTS:
// files:
import "./style.css";
import ProfilePic from "./profile-pic.png";


const CLOUDINARY_UPLOAD_PRESET = 'your_upload_preset_id';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/your_cloudinary_app_name/upload';

export default class ProfilePicture extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            uploadedFileCloudinaryUrl: ''
        };
    }

    onImageDrop(files) {
        this.setState({
            uploadedFile: files[0]
        });

        this.handleImageUpload(files[0]);
    }

    handleImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', file);

        upload.end((err, response) => {
            if(err) {
                console.error(err);
            }

            if(response.body.secure_url !== '') {
                this.setState({
                    uploadedFileCloudinaryUrl: response.body.secure_url
                });
            }
        });
    }

    // render() {
    //     return (
    //         <div>
    //             <div className="FileUpload">
    //                 ...
    //       </div>

    //             <div>
    //                 {this.state.uploadedFileCloudinaryUrl === '' ? null :
    //                     <div>
    //                         <p>{this.state.uploadedFile.name}</p>
    //                         <img src={this.state.uploadedFileCloudinaryUrl} />
    //                     </div>}
    //             </div>
    //         </div>
    //     )

    // }

    render() {
        return (
            <React.Fragment>

                <img class="profile-pic" src={ProfilePic} />

                <Dropzone
                    onDrop={this.onImageDrop.bind(this)}
                    accept="image/*"
                    multiple={false}>
                    {({ getRootProps, getInputProps }) => {
                        return (
                            <div className="profile-pic-text"
                                {...getRootProps()}
                            >
                                <input {...getInputProps()} />
                                {
                                    // <p class="font-weight-bold">Drop your profile picture here or click to select files.</p>
                                }
                            </div>
                        )
                    }}
                </Dropzone>
            </React.Fragment>
        )

    }
}


    // class UserIntro extends Component {
    //     render() {
    //         return (
    //             <React.Fragment>


    //                 <Router>
    //                     <Route>

    //                     </Route>
    //                 </Router>


    //             </React.Fragment >
    //         );
    //     }
    // }

    // export default UserIntro;