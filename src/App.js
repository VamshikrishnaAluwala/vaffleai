// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Home';
import LoginPage from './components/LoginPage';
import PrdPage from './components/PRD/PrdPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/contact/ContactPage';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        {isLoggedIn ? (
          <>
            {/* Render Sidebar, Header, and Footer along with routing */}
            <Sidebar />
            <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', height: '100vh' }}>
              <Header />
              <main style={{ flexGrow: 1, padding: '20px' }}>
                <Routes>
                  <Route path="/home" element={<Homepage />} />
                  <Route path="/" element={<Navigate to="/home" />} />
                  <Route path="/prdgenration" element={<PrdPage/>} />
                  <Route path="/about" element={<AboutPage/>} />
                  <Route path="/contact" element={<ContactPage/>} />
                  
                </Routes>
              </main>
              <Footer />
            </div>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
