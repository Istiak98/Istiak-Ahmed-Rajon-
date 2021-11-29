import React from "react";
import "./Navbar.css";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark  sticky-top">
        <div class="container-fluid">
          <a class="navbar-brand " href="/">
            Istiak Ahmed <span className="rajon">Rajon</span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
                {/* <Nav.Link as={HashLink} to="/home#home">
                Home
              </Nav.Link> */}
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">
                  About
                </a>
                {/* <Nav.Link as={HashLink} to="/home#about">
                About
              </Nav.Link> */}
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#projects">
                 Projects
                </a>
                {/* <Nav.Link as={HashLink} to="/home#projects">
                Projects
              </Nav.Link> */}
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#expirence">
                  Expirence
                </a>
                {/* <Nav.Link as={HashLink} to="/home#projects">
                Projects
              </Nav.Link> */}
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">
                Contact
                </a>
                {/* <Nav.Link as={HashLink} to="/home#projects">
                Projects
              </Nav.Link> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
