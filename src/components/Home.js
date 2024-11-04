import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Home.css';

import prdImage from '../assets/prd.jpg';
import daacImage from '../assets/daac-image.jpg';
import cicdImage from '../assets/cicd-image.jpg';
import testingImage from '../assets/testing-image.jpg';

const useCases = [
  { title: 'PRD Generation', description: 'Automate your Product Requirements Document creation with ease.', imgSrc: prdImage, path: '/prdgenration' },
  { title: 'DAAC Compliance', description: 'Ensure compliance with Data Access and Compliance standards.', imgSrc: daacImage },
  { title: 'CI/CD Pipeline', description: 'Streamline your continuous integration and delivery pipeline.', imgSrc: cicdImage },
  { title: 'Automated Testing', description: 'Enhance software quality with automated testing solutions.', imgSrc: testingImage }
];

const Homepage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNavigate = (path) => {
    navigate(path); // Navigate to the given path
  };

  return (
    <div className="landing-page">
      <div className="use-cases">
        {useCases.map((useCase, index) => (
          <div key={index} className="use-case">
            <img src={useCase.imgSrc} alt={useCase.title} />
            <h3>{useCase.title}</h3>
            <p>{useCase.description}</p>
            {useCase.path ? (
              <button onClick={() => handleNavigate(useCase.path)}>Go to {useCase.title}</button>
            ) : (
              <button>Learn More</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
