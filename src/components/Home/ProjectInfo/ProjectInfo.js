import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
// import { Link } from "react-router-dom";
import "./ProjectInfo.css";
const ProjectInfo = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/projectData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const ExactProject = data.filter((sr) => sr.id === id);
  // console.log(ExactProject)
  return (
    <div className="" id="about">
      <div class="container px-4 ">
        <div class="row gx-5">
          <div class="col">
            <div class="p-3">
              <h1 className="fs-1">Project Samples</h1>
              <img
                src={ExactProject[0]?.image1}
                className="img-fluid img-rounded zoom w-50 mt-2"
                alt="..."
              />{" "}
              <br /> <br />
              <img
                src={ExactProject[0]?.image2}
                className="img-fluid img-rounded zoom w-50"
                alt="..."
              />{" "}
              <br /> <br />
              <img
                src={ExactProject[0]?.image3}
                className="img-fluid img-rounded zoom w-50 mb-5"
                alt="..."
              />{" "}
              <br /> <br />
            </div>
          </div>
          <div class="col">
            <div
              class="card text-dark  mb-5 mt-5 m-auto"
              style={{ "max-width": "18rem" }}
            >
              <div class="card-body">
                <h5 class="card-title fw-bold">{ExactProject[0]?.title}</h5>
                <h5 className="h5-text fw-bold text-start">
                  Description:{" "}
                  <span className="rajon">{ExactProject[0]?.description}</span>{" "}
                </h5>
                <h5 className="h5-text fw-bold text-start">
                  Tools: <span className="rajon">{ExactProject[0]?.Tools}</span>{" "}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
