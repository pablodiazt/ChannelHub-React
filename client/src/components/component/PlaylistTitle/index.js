// ---- dependencies:
import React from "react";
// ---- files:
import "./style.css";


function PlaylistTitle() {
    return (
        <React.Fragment>
            {/* ----------- PLAYLIST NAME */}
            <nav class="navbar navbar-light bg-light playlistTitle">
                <h5>
                    HTML Videos:  <button type="button" class="btn btn-secondary btn-sm">edit name</button> <button type="button" class="btn btn-secondary btn-sm btnUpload">upload video</button> <button type="button" class="btn btn-secondary btn-sm">edit playlist</button>
                </h5>
            </nav>
        </React.Fragment>
    );
}

export default PlaylistTitle;