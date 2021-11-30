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
         
          <h1 class="heading">My Awesome Service</h1>
        </div>
        <div class="content">
          <div class="container">
            <div class="row" style={{"overflow-x": "hidden","overflow-y": "hidden"}}>
              <div class="col-xs-12 col-sm-4">
                <div class="card6" data-aos="fade-right">
                  <a class="img-card6" href="/">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgNWa_4D7bVpESc6LYXCNEDO1vUHkc75xsIrphtOD5RxZWw3irb9Vdv2XMA1WZdYGDZo8&usqp=CAU" />
                  </a>
                  <div class="card-content6">
                    <h4 class="card-title6">
                      <a href="/">
                        {" "}
                        Website Development
                      </a>
                    </h4>
                    <p class="">
                      Tutorial to make a carousel bootstrap by adding more
                      wonderful effect fadein ...
                    </p>
                  </div>
                 
                </div>
              </div>
              <div class="col-xs-12 col-sm-4">
                <div class="card6" data-aos="fade-left">
                  <a class="img-card6" href="/">
                    <img src="https://3.bp.blogspot.com/-bAsTyYC8U80/VtLZRKN6OlI/AAAAAAAABjY/kAoljiMALkQ/s400/material%2Bnavbar.jpg" />
                  </a>
                  <div class="card-content6">
                    <h4 class="card-title6">
                      <a href="/">
                        {" "}
                        Material Design Responsive
                      </a>
                    </h4>
                    <p class="">
                      Material Design is a visual programming language made by
                    </p>
                  </div>
                 
                </div>
              </div>
              <div class="col-xs-12 col-sm-4">
                <div class="card6" data-aos="fade-right">
                  <a class="img-card6" href="/">
                    <img src="https://i.ytimg.com/vi/_2LLXnUdUIc/maxresdefault.jpg" />
                  </a>
                  <div class="card-content6">
                    <h4 class="card-title6">
                      <a href="/">Graphics Design</a>
                    </h4>
                    <p class="">
                      tutorials button hover animation, although very much a
                      hover button is very beauti...
                    </p>
                  </div>
                  
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
