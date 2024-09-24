import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to SpendGenius</h1>
        <p>Take control of your finances with personalized budgeting, spending analysis, and financial predictions.</p>
        <button className="hero-button">Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;
