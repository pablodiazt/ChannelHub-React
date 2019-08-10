

import React from "react";


function Something() {
    return (
        <React.Fragment>

            {/* <!--Grid column--> */}
            <div class="col-md-6 mb-4">

                <form class="input-group">
                    <input type="text" class="form-control form-control-sm" placeholder="Your email"
                        aria-label="Your email" aria-describedby="basic-addon2"></input>
                    <div class="input-group-append">
                        <button class="btn btn-sm btn-outline-white my-0" type="button">Sign up</button>
                    </div>
                </form>

            </div>
            {/* <!--Grid column--> */}


            <nav class="navbar navbar-light bg-light">
                    <form class="form-inline">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">@</span>
                            </div>
                            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                        </div>
                    </form>
                </nav>

        </React.Fragment>
    );
}

export default Something;
