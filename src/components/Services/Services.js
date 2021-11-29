import { useEffect } from "react";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Services.css";
const Services = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: "ease",
    });
  });
  return (
    <section class="wrapper mt-2">
      <div class="container-fostrap">
        <div>
          {/* <img
            src="https://4.bp.blogspot.com/-7OHSFmygfYQ/VtLSb1xe8kI/AAAAAAAABjI/FxaRp5xW2JQ/s320/logo.png"
            class="fostrap-logo"
          /> */}
          <h1 class="heading">My Awesome Service</h1>
        </div>
        <div class="content">
          <div class="container">
            <div class="row" style={{"overflow-x": "hidden","overflow-y": "hidden"}}>
              <div class="col-xs-12 col-sm-4">
                <div class="card" data-aos="fade-right">
                  <a class="img-card" href="https://ahmed-drone.web.app/">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgNWa_4D7bVpESc6LYXCNEDO1vUHkc75xsIrphtOD5RxZWw3irb9Vdv2XMA1WZdYGDZo8&usqp=CAU" />
                  </a>
                  <div class="card-content">
                    <h4 class="card-title">
                      <a href="https://ahmed-drone.web.app/">
                        {" "}
                        Website Development
                      </a>
                    </h4>
                    <p class="">
                      Tutorial to make a carousel bootstrap by adding more
                      wonderful effect fadein ...
                    </p>
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
                <div class="card" data-aos="fade-left">
                  <a class="img-card" href="https://ahmed-drone.web.app/">
                    <img src="https://3.bp.blogspot.com/-bAsTyYC8U80/VtLZRKN6OlI/AAAAAAAABjY/kAoljiMALkQ/s400/material%2Bnavbar.jpg" />
                  </a>
                  <div class="card-content">
                    <h4 class="card-title">
                      <a href="https://ahmed-drone.web.app/">
                        {" "}
                        Material Design Responsive
                      </a>
                    </h4>
                    <p class="">
                      Material Design is a visual programming language made by
                    </p>
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
                <div class="card" data-aos="fade-right">
                  <a class="img-card" href="https://ahmed-drone.web.app/">
                    <img src="https://i.ytimg.com/vi/_2LLXnUdUIc/maxresdefault.jpg" />
                  </a>
                  <div class="card-content">
                    <h4 class="card-title">
                      <a href="https://ahmed-drone.web.app/">Graphics Design</a>
                    </h4>
                    <p class="">
                      tutorials button hover animation, although very much a
                      hover button is very beauti...
                    </p>
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

export default Services;
