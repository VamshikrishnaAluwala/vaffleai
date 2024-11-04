// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import PersonIcon from '@mui/icons-material/Person';
import { IconButton, Alert, CircularProgress } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();
  const [alertVisible, setAlertVisible] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false); // State for error alert
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // State for loading indicator

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded credentials
    const hardcodedUsername = 'vamshi';
    const hardcodedPassword = '1234';

    // Check if credentials match
    if (username === hardcodedUsername && password === hardcodedPassword) {
      setLoading(true); // Show loading spinner
      onLogin(); // Update login state in App.js
      setAlertVisible(true); // Show the success alert
      setErrorVisible(false); // Hide error alert

      // Simulate a delay for loading
      setTimeout(() => {
        setLoading(false); // Hide loading spinner
        navigate('/home'); // Navigate to home page after login
      }, 2000); // 2 seconds delay
    } else {
      setErrorVisible(true); // Show error alert if login fails
      setAlertVisible(false); // Hide success alert
    }
  };

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <h2 className="active"> Vaffle AI </h2>
        <div className="fadeIn first">
          <IconButton>
            <PersonIcon />
          </IconButton>
        </div>
        <form onSubmit={handleLogin}>
          <input 
            type="text" 
            id="login" 
            className="fadeIn second" 
            name="login" 
            placeholder="login" 
            required 
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Update username state
          />
          <input 
            type="password" 
            id="password" 
            className="fadeIn third" 
            name="password" 
            placeholder="password" 
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state
          />
          <input 
            type="submit" 
            className="fadeIn fourth" 
            value="Log In" 
            disabled={loading} // Disable the button while loading
          />
        </form>
        <div id="formFooter">
          <a className="underlineHover" href="#">Forgot Password?</a>
        </div>
        
        {loading ? (
          <CircularProgress style={{ marginTop: '20px' }} />
        ) : (
          <>
            {alertVisible && (
              <Alert 
                icon={<CheckIcon fontSize="inherit" />} 
                severity="success" 
                style={{ marginTop: '20px' }}
              >
                Successfully logged in!
              </Alert>
            )}
            
            {errorVisible && (
              <Alert 
                severity="error" 
                style={{ marginTop: '20px' }}
              >
                Invalid username or password!
              </Alert>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
