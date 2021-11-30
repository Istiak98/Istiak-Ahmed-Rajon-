import React from "react";
import Services from "../Services/Services";
// import Navbar from "../Shared/Navbar/Navbar";
import About from "./About/About";
import Expirence from "./Expirence/Expirence";
// import Projects from "../Projects/Projects";
import Contact from "../Home/Contact/Contact";
import Header from "./Header/Header";
import HomeProjects from "../Projects/HomeProjects/HomeProjects";

const Home = () => {
  return (
    <div>
      <Header />
      <About></About>
      <HomeProjects />
      <Expirence></Expirence>
      <Services />
      <Contact></Contact>
    </div>
  );
};

export default Home;
