import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Experience from "./components/Experience";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
const App = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] px-16">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />

        <AboutSection />

        <Experience />

        <ProjectsSection />

        <EmailSection />
      </div>
      <Footer />
    </main>
  );
};

export default App;