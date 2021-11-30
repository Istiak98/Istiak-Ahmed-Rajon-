import React from "react";
import "./Expirence.css";
const Expirence = () => {
  return (
    <div className="">
      <h1 className="">MY EXPIRENCE</h1>
      {/* <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p> */}
      <div class="container px-4">
        <div class="row gx-5" id="expirence">
          <div class="col">
            <div class="p-3 ">
              <h3 className="text-start">Education</h3>
              <h4 className="blue-txt">
                BSc in Computer Science and Engineering
              </h4>
              <p>Aprit_2018 - Prestent</p>
              <h5>International Islamic University Chittagong</h5>
            </div>
          </div>
          <div class="col">
            <div class="p-3 ">
              {" "}
              <h3 className="text-start">Expirence</h3>
              <h4 className="blue-txt">Associate of Visual and Graphics</h4>
              <p>2019 - Prestent</p>
              <h5>Opportunities For Kids - OFK</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="container px-4 mt-5">
        <div class="row gx-5">
          <div class="col">
            <div class="p-3 ">
              <h6 className="text-start">Javascript</h6>
              <div class="progress" style={{ height: "4px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "85%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <h6 className="text-start">Bootstrap</h6>
              <div class="progress" style={{ height: "4px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "95%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <h6 className="text-start">React js</h6>
              <div class="progress" style={{ height: "4px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <h6 className="text-start">Tailwind</h6>
              <div class="progress" style={{ height: "4px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "55%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="p-3 ">
              <h6 className="text-start">CSS3</h6>
              <div class="progress" style={{ height: "4px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "95%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <h6 className="text-start">MongoDB</h6>
              <div class="progress" style={{ height: "4px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "70%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <h6 className="text-start">Firebase</h6>
              <div class="progress" style={{ height: "4px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "74%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <h6 className="text-start">Next Js</h6>
              <div class="progress" style={{ height: "4px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "55%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expirence;
