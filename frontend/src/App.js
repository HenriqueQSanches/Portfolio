import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Start from './pages/Start/Start';
import About from './pages/About/About';
import Techinfo from './pages/Techinfo/Techinfo';
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
                  initial={{ y: '50%', opacity: 0 }} 
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: '50%', opacity: 0 }} 
                  transition={{ type: 'spring', stiffness: 300 }} 
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
                  initial={{ y: '50%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }} 
                  exit={{ y: '50%', opacity: 0 }} 
                  transition={{ type: 'spring', stiffness: 300 }} 
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
                  initial={{ y: '50%', opacity: 0 }} 
                  animate={{ y: 0, opacity: 1 }} 
                  exit={{ y: '50%', opacity: 0 }} 
                  transition={{ type: 'spring', stiffness: 300 }} 
                >
                  <Techinfo />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
