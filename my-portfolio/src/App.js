
import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials"

export default function App() {
  return (
    <main className="text-yellow-700 bg-white-100 body-font">
           <Navbar />
           <About />
           <Projects/>
           <Skills />
           <Testimonials />
\
    </main>
  );
}