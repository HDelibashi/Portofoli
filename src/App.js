import React from 'react';
import './index.css';
import './App.css';
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <main className="main">
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      </main>
    </div>
  );
}

export default App;
