import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import Products from "./components/Products";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import { ReactTyped } from "react-typed";
function App() {
  return (
    <div>
      <Navbar />

      <Hero />
      <Analytics />
      <Newsletter />
      <Products />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
