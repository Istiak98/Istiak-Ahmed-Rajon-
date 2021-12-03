import React from "react";
import ABOUT from "../../../images/about2.jpg";
import "./About.css";
import TypeWriter from "typewriter-effect";
const About = () => {
  return (
    <div className="" id="about">
      <div class="container px-4 ">
        <div class="row gx-5">
          <div class="col">
            <div class="p-3">
              <h1 className="fs-1 text-start">About Me</h1>
              {/* <p className="text-start">Lorem ipsum dolor sit amet.</p> */}
              <img className="img-fluid img-thumbnail" src={ABOUT} alt="" />
            </div>
          </div>
          <div class="col">
            <div class="p-3">
              {/* <h1 className="text-start">I'm Istiak Ahmed Rajon</h1> */}
              <h1>
                I'm{" "}
                <span className="typewriter rajon">
                  <TypeWriter
                    options={{
                      strings: [
                        "Istiak Ahmed Rajon",
                        "Istiak Ahmed Rajon",
                        "Istiak Ahmed Rajon",
                      ],
                      autoStart: true,
                      delay: 60,
                      loop: true,
                    }}
                  />
                </span>
              </h1>
              <h5 className="text-start">Junior Mern Stack Web Developer</h5>
              <p className="text-start">
                I design and develop services for customers specializing
                creating stylish, modern websites, web services and online
                stores. My passion is to design digital user experiences through
                meaningful interactions. Check out my Portfolio
              </p>
            </div>
            <hr className="" />

            {/* <div class="container">
              <div class="row g-2">
                <div class="col-6">
                  <div class="p-3 ">Name: Istiak Ahmed</div>
                  <div class="p-3 ">Phone: 01754956909</div>
                </div>
                <div class="col-6">
                  <div class="p-3 ">Age : 23 Years</div>
                  <div class="p-3 ">Nationality : Bangladeshi</div>
                </div>
              </div>
            </div> */}
            <div class="card justify-content-center m-auto" style={{ width: "18rem" }}>
              <div class="card-body">
                <h3 className="fw-bold text-center ">Personal Info</h3>
                {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                <p class="card-text">
                  Name:{" "}
                  <span className="rajon fw-bold">Istiak Ahmed Rajon</span>
                </p>
                <p class="card-text">
                  Email:{" "}
                  <span className="rajon fw-bold">
                    istiakahmed104127@gmail.com
                  </span>
                </p>
                <p class="card-text">
                  Mobile:{" "}
                  <span className="rajon fw-bold">(+880)1754956909</span>
                </p>
                <a
                  className="btna"
                  href="https://drive.google.com/drive/folders/1G95xCrH0KwoAXUt3HVtpyZkTJJV02Vjv" 
                  download>
                  <button className="btn btn-outline-dark  mt-4 mb-3">
                    Download Resume
                  </button>{" "}
                </a>{" "}
                <br />
                <a
                  className="btna"
                  href="https://www.facebook.com/istiak.ahmed.18041"
                >
                  {" "}
                  <button class="btn2 px-3 mb-2">
                    <i className="fab fa-facebook-f">Facebook</i>
                  </button>
                </a> <br/>
                <a
                  className="btna"
                  href="https://www.linkedin.com/in/istiak-ahmed-857b92226/"
                >
                  {" "}
                  <button class="btn2 px-3">
                    <i class=" fab fa-linkedin-in"> LinkedIn</i>
                  </button>
                </a>
                <a className="btna" href="https://github.com/Istiak98">
                  {" "}
                  <button class="btn2 mt-2">
                    <i class=" fab fa-github"> Github</i>
                  </button>
                </a>
              </div>
            </div>
            <div className="">
              {/* <a
                className="btna"
                href="https://drive.google.com/drive/folders/1G95xCrH0KwoAXUt3HVtpyZkTJJV02Vjv"
              >
                <button className="btn btn-outline-dark  mt-4 mb-3">
                  Download CV
                </button>{" "}
              </a>
              <br />
              <a
                className="btna"
                href="https://www.facebook.com/istiak.ahmed.18041"
              >
                {" "}
                <button class="btn2">
                  <i className="fab fa-facebook-f">Facebook</i>
                </button>
              </a>
              <a
                className="btna"
                href="https://www.linkedin.com/in/istiak-ahmed-857b92226/"
              >
                {" "}
                <button class="btn2">
                  <i class=" fab fa-linkedin-in"> LinkedIn</i>
                </button>
              </a>
              <a className="btna" href="https://github.com/Istiak98">
                {" "}
                <button class="btn2">
                  <i class=" fab fa-github"> Github</i>
                </button>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
