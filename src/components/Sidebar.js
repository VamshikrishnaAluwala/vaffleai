import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FaCog, FaUser, FaList } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Vaffle.AI</h2>
      <div className='inner-sidebar'>
        <ul>
          <li><Link to="/"><FaCog /> Home</Link></li>
          <li><Link to="/login"><FaUser /> Login</Link></li>
          <li><FaList /> Settings</li>
        </ul>
        <div className="profile-section">
          <img src="path/to/profile.jpg" alt="Profile" className="profile-image" />
          <p>Amanda <span role="img" aria-label="settings">⚙️</span></p>
          <p>View profile</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;