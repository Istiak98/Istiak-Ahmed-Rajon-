import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import "./Projects.css";
import P1 from "../../images/p1.png";
import P2 from "../../images/p2.png";
import P3 from "../../images/p3.png";
const Projects = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: "ease",
    });
  });
  return (
    <section class="wrapper mt-5" id='projects'>
      <div class="container-fostrap">
        <div>
          {/* <img
            src="https://4.bp.blogspot.com/-7OHSFmygfYQ/VtLSb1xe8kI/AAAAAAAABjI/FxaRp5xW2JQ/s320/logo.png"
            class="fostrap-logo"
          /> */}
          <h1 class="heading">My Projects</h1>
        </div>
        <div class="content">
          <div class="container">
            <div class="row" style={{"overflow-x": "hidden","overflow-y": "hidden"}}>
              <div class="col-xs-12 col-sm-4">
                <div class="card"  data-aos="fade-left" >
                  <a class="img-card" href="https://ahmed-drone.web.app/">
                    <img src={P1} />
                  </a>
                  <div class="card-content">
                    <h4 class="card-title">
                      <a href="https://ahmed-drone.web.app/"> AHMED DRONES</a>
                    </h4>
                    <p class="">It's a Drone Selling Website</p>
                  </div>
                  {/* <div class="card-read-more">
                    <a
                      href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html"
                      class="btn btn-link btn-block"
                    >
                      Read More
                    </a>
                  </div> */}
                </div>
              </div>
              <div class="col-xs-12 col-sm-4">
                <div class="card"  data-aos="fade-right">
                  <a
                    class="img-card"
                    href="https://bangladesh-medical.web.app/"
                  >
                    <img src={P2} />
                  </a>
                  <div class="card-content">
                    <h4 class="card-title">
                      <a href="https://bangladesh-medical.web.app/">
                        {" "}
                        BANGLADESH MEDICAL
                      </a>
                    </h4>
                    <p class="">It's a Medical Services Website</p>
                  </div>
                  {/* <div class="card-read-more">
                    <a
                      href="https://codepen.io/wisnust10/full/ZWERZK/"
                      class="btn btn-link btn-block"
                    >
                      Read More
                    </a>
                  </div> */}
                </div>
              </div>
              <div class="col-xs-12 col-sm-4">
                <div class="card"  data-aos="fade-left">
                  <a class="img-card" href="https://ahmed-travels.web.app/">
                    <img src={P3} />
                  </a>
                  <div class="card-content">
                    <h4 class="card-title">
                      <a href="https://ahmed-travels.web.app/">AHMED TRAVELS</a>
                    </h4>
                    <p class="">It's a Travelling Website</p>
                  </div>
                  {/* <div class="card-read-more">
                    <a
                      href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html"
                      class="btn btn-link btn-block"
                    >
                      Read More
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
