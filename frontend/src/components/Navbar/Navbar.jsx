import React from "react";
import "./Navbar.css";
import { FaGithub } from "react-icons/fa"; // Importing the GitHub icon

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>SpendGenius</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="https://github.com/VishalBhat07/spend-genius" className="github-button">
            <FaGithub /> GitHub
          </a>
        </li>
        <li>
          <a href="#login" className="btn-login">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
