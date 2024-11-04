import React from 'react';
import { Link } from 'react-router-dom';
import './PrdPage.css';

const PrdPage = () => {
  return (
    <div className="prd-page">
      <h1>Product Requirements Document</h1>
      <ul>
        <li><Link to="/section1">Section 1</Link></li>
        <li><Link to="/section2">Section 2</Link></li>
        <li><Link to="/section3">Section 3</Link></li>
      </ul>
    </div>
  );
};

export default PrdPage;
