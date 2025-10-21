import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Start from './pages/Start/Start';
import About from './pages/About/About';
import Techinfo from './pages/Techinfo/Techinfo';
import Awards from './pages/Awards/Awards';
import Projects from './pages/Projects/Projects';
import Services from './pages/Services/Services';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <AnimatePresence>
          <Routes>
            <Route
              path="/"
              element={
                <motion.div
                  key="start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Start />
                </motion.div>
              }
            />
            <Route
              path="/about"
              element={
                <motion.div
                  key="about"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <About />
                </motion.div>
              }
            />
            <Route
              path="/tech"
              element={
                <motion.div
                  key="tech"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Techinfo />
                </motion.div>
              }
            />
            <Route
              path="/awards"
              element={
                <motion.div
                  key="awards"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Awards />
                </motion.div>
              }
            />
            <Route
              path="/projects"
              element={
                <motion.div
                  key="projects"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Projects />
                </motion.div>
              }
            />
            <Route
              path="/services"
              element={
                <motion.div
                  key="services"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Services />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
