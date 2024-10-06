import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login"; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HeroSection />} /> {/* Home Route */}
        <Route path="/features" element={<Features />} /> {/* Features Route */}
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
