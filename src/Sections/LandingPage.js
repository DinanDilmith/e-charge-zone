import React from "react";
import Features from "../Components/Features";
import Home from "../Components/Home";
import NaviBar from "../Components/NaviBar";
import About from "../Components/About";
import Footer from "../Components/Footer";

export default function LandingPage() {
  return (
    <div>
      <NaviBar />
      <Home />
      <Features />
      <About />
      <Footer />
    </div>
  );
}
