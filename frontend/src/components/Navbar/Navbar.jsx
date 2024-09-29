import React from "react";
import "./Navbar.css";
import { FaGithub } from "react-icons/fa"; // Importing the GitHub icon
import {Link} from "react-router-dom"
import Login from "../Login/Login";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>SpendGenius</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/features">Features</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="https://github.com/VishalBhat07/spend-genius" className="github-button">
            <FaGithub /> GitHub
          </Link>
        </li>
        <li>
          <Link to="/login" className="btn-login">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
