import React from "react";
import "./style.css";

function VideosRow() {
    return (
        <React.Fragment>




            {/* -------------- MULTIPLE IMAGES */}
            <footer class="page-footer font-small mdb-color lighten-3 pt-0 videoRow">

                {/* <!-- Footer Elements --> */}
                <div class="container">

                    {/* <!--Grid row--> */}
                    <div class="row">







                        {/* <!--------------Grid column--> */}
                        <div class="col-lg-2 col-md-12 mb-4">
                            {/* <!--Image--> */}
                            <div class="view overlay z-depth-1-half">
                                <img src="https://youtu.be/hrZqiCUx6kg" class="img-fluid vidImage"
                                    alt="">
                                </img>
                                <a href="">
                                    <div class="mask rgba-white-light"></div>
                                </a>

                            </div>
                        </div>


                        {/* <!--------------Grid column--> */}
                        <div class="col-lg-2 col-md-6 mb-4">
                            {/* <!--Image--> */}
                            <div class="view overlay z-depth-1-half">
                                <iframe class="img-fluid vidImage" src="https://www.youtube.com/embed/hrZqiCUx6kg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                {/* <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(78).jpg" class="img-fluid"
                                    alt=""></img> */}
                                <a href="">
                                    <div class="mask rgba-white-light"></div>
                                </a>
                            </div>
                        </div>


                        {/* <!--------------Grid column--> */}
                        <div class="col-lg-2 col-md-6 mb-4">
                            {/* <!--Image--> */}
                            <div class="view overlay z-depth-1-half">
                                <iframe class="img-fluid vidImage" src="https://www.youtube.com/embed/8gNrZ4lAnAw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <a href="">
                                    <div class="mask rgba-white-light"></div>
                                </a>
                            </div>
                        </div>


                        {/* <!--------------Grid column--> */}
                        <div class="col-lg-2 col-md-12 mb-4">
                            {/* <!--Image--> */}
                            <div class="view overlay z-depth-1-half">
                                <iframe class="img-fluid vidImage" src="https://www.youtube.com/embed/y3UH2gAhwPI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <a href="">
                                    <div class="mask rgba-white-light"></div>
                                </a>
                            </div>
                        </div>


                        {/* <!--------------Grid column--> */}
                        <div class="col-lg-2 col-md-6 mb-4">
                            {/* <!--Image--> */}
                            <div class="view overlay z-depth-1-half">
                                <iframe class="img-fluid vidImage" src="https://www.youtube.com/embed/3JluqTojuME" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <a href="">
                                    <div class="mask rgba-white-light"></div>
                                </a>
                            </div>
                        </div>





                    </div>
                    {/* <!--Grid row--> */}

                </div>
                {/* <!-- Footer Elements --> */}

            </footer>
            {/* -------------- MULTIPLE IMAGES */}







        </React.Fragment >
    )
};


export default VideosRow;