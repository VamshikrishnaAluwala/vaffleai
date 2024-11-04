// LandingPage.js
import React from 'react';
import './Home.css';

// Importing images from the assets folder inside src
import prdImage from '../assets/prd.jpg'; // Note the '../' to go up one level
import daacImage from '../assets/daac-image.jpg'; // Note the '../' to go up one level
import cicdImage from '../assets/cicd-image.jpg'; // Note the '../' to go up one level
import testingImage from '../assets/testing-image.jpg'; // Note the '../' to go up one level

const useCases = [
  { title: 'PRD Generation', description: 'Automate your Product Requirements Document creation with ease.', imgSrc: prdImage },
  { title: 'DAAC Compliance', description: 'Ensure compliance with Data Access and Compliance standards.', imgSrc: daacImage },
  { title: 'CI/CD Pipeline', description: 'Streamline your continuous integration and delivery pipeline.', imgSrc: cicdImage },
  { title: 'Automated Testing', description: 'Enhance software quality with automated testing solutions.', imgSrc: testingImage }
];

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="use-cases">
        {useCases.map((useCase, index) => (
          <div key={index} className="use-case">
            <img src={useCase.imgSrc} alt={useCase.title} />
            <h3>{useCase.title}</h3>
            <p>{useCase.description}</p>
            <button>Click</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
