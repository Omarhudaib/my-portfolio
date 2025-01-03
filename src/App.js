import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";

const App = () => {
  const [binaryCode, setBinaryCode] = useState(""); // Start with an empty string

  // Update binary code every 100 milliseconds
  useEffect(() => {
    const interval = setInterval(() => {
      const newBinary = generateBinaryCode();
      setBinaryCode(newBinary);
    }, 100);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Function to generate multiple lines of random binary code
  const generateBinaryCode = () => {
    const binaryLength = 100; // Length of one binary string
    const numberOfLines = 30; // Number of lines to fill the screen

    let binaryString = "";
    for (let i = 0; i < numberOfLines; i++) {
      let line = "";
      for (let j = 0; j < binaryLength; j++) {
        line += Math.random() < 0.5 ? "1 " : "0 "; // Random binary number
      }
      binaryString += line.trim() + "\n"; // Add each line of binary code
    }
    return binaryString;
  };

  return (
    
    <div className="app-container">    <div className="binary-background">{binaryCode}</div>
      <Header />
      <main className="main-content">
    
        <About />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
