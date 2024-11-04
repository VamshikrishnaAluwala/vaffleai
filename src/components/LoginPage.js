import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(); // Update login state in App.js
    navigate('/'); // Navigate to home page after login
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
          />
          <input 
            type="password" 
            id="password" 
            className="fadeIn third" 
            name="password" 
            placeholder="password" 
            required 
          />
          <input 
            type="submit" 
            className="fadeIn fourth" 
            value="Log In" 
          />
        </form>
        <div id="formFooter">
          <a className="underlineHover" href="#">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
