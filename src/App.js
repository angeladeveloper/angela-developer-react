import React from 'react';
import './App.css';
import NavigationBar from './components/Navbar';
import ProjectCard from './components/Project';
import { Routes, Route } from 'react-router-dom';
import ContactMe from './components/ContactMe';
import Home from './pages/Home.js';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          index
          element={<React.Suspense children={<Home />} />}
        />
        <Route
          path="/aboutme"
          element={<React.Suspense children={<AboutMe />} />}
        />
        <Route
          path="/projects"
          element={<React.Suspense children={<Projects />} />}
        />

      </Routes>
    </div>
  );
}

export default App;
