import React, { useEffect, useState } from "react";
import Projects from "../Projects";
import "./HomeProjects.css";
const HomeProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("./projectData.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  });
  return (
    <div className="mt-5" id='projects'>
     
      <div>
        <h1 class="heading">Projects</h1>
      </div>
      <div className="service-details">
        {projects.map((project) => (
          <Projects project={project} key={project.id}></Projects>
        ))}
      </div>
    </div>
  );
};

export default HomeProjects;
