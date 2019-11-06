// ---- dependencies:
import React from "react";
// ---- files:
import "./style.css";


function PlaylistTitle() {
    return (
        <React.Fragment>
            {/* ----------- PLAYLIST NAME */}
            <nav class="navbar-light bg-light playlistBar">
                <h5 className="title">
                    HTML Videos:
                </h5>
                <button type="button" class="btn btn-secondary btn-sm btnEditTitle">edit name</button> <button type="button" class="btn btn-secondary btn-sm">upload video</button> <button type="button" class="btn btn-secondary btn-sm btnEditPlaylist">edit playlist</button>
            </nav>
        </React.Fragment>
    );
}

export default PlaylistTitle;