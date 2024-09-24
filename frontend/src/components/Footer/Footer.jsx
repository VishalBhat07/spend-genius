import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"; // Importing React Icons

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h1 className="footer-logo">SpendGenius</h1>
          <p>
            SpendGenius helps you manage your finances effortlessly. Track your
            expenses, set budgets, and gain insights into your spending habits.
          </p>
          <div className="footer-social-icons">
            <a
              href="https://github.com/VishalBhat07/spend-genius"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={40} />
            </a>
            <a
              href="https://www.linkedin.com/in/vishalbhat07"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={40} />
            </a>
            <a
              href="https://www.instagram.com/VishalBhat07"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={40} />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>PRODUCT</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Features</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 7975806665</li>
            <li>contact@spendgenius.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 &copy; SpendGenius - All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
