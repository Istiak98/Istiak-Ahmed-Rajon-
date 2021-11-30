import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import "./Projects.css";
import { Link, NavLink } from "react-router-dom";

const Projects = (props) => {
  const { title, image1, description, tools, id, Live, Github } = props.project;
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: "ease",
    });
  });
  return (
    <div class="card-container00" id="projects">
      <div class="card00" data-aos="fade-right">
        <header class="card-header header-img">
          <img src={image1} alt="" />
          <p class="header-title2">{title}</p>
        </header>
        <div class="card-body00">{description.slice(0, 250)}</div>
        <div class="card-footer00" data-aos="fade-left">
          {/* <button class="btn00">Github</button>
          <button class="btn00">Live</button> */}
          <Link to={`/detailProject/${id}`}>
            <button class="btn00">Projects Details</button>
          </Link>{" "}
          <br /> <br />
          {/* <Link to={`Live`}><button class="btn00">Live</button></Link> */}
          {/* <Nav.Link as={HashLink} href={Live}>Live</Nav.Link> */}
          <a href={Live} className="px-2">
            <button class="btn btn-outline-danger">Visit Website</button>
          </a>
          <a href={Github}>
            <button class="btn btn-outline-dark">Github</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
