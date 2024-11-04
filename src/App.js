// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/Home';
import LoginPage from './components/LoginPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const handleLogin = () => {
    setIsLoggedIn(true); // Call this function when the user logs in
  };

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        {isLoggedIn ? (
          <>
            <Sidebar />
            <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', height: '100vh' }}>
              <Header />
              <main style={{ flexGrow: 1, padding: '20px' }}>
                <Routes>
                  <Route path="/home" element={<LandingPage />} /> {/* Home page */}
                  <Route path="/" element={<Navigate to="/home" />} /> {/* Redirect "/" to "/home" when logged in */}
                </Routes>
              </main>
              <Footer />
            </div>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<LoginPage onLogin={handleLogin} />} /> {/* LoginPage route */}
            <Route path="/home" element={<Navigate to="/" />} /> {/* Redirect "/home" to login if not logged in */}
            <Route path="*" element={<Navigate to="/" />} /> {/* Redirect any other routes to LoginPage */}
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
