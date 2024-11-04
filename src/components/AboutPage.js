import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>About Vaffle.AI</h1>
      <p>
        Vaffle.AI is a cutting-edge platform designed to streamline the process of creating 
        Product Requirements Documents (PRD) and enhance collaboration among teams. Our mission 
        is to empower businesses by automating repetitive tasks and providing intelligent insights 
        that improve productivity and project outcomes.
      </p>
      <h2>Our Vision</h2>
      <p>
        At Vaffle.AI, we envision a world where AI-driven tools simplify the complexities of project 
        management and documentation. We strive to create solutions that not only save time but also 
        foster innovation and creativity within organizations.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Automated PRD generation tailored to your project's needs.</li>
        <li>Collaborative tools for real-time editing and feedback.</li>
        <li>Intelligent insights and suggestions to enhance document quality.</li>
        <li>Seamless integration with popular project management tools.</li>
      </ul>
      <h2>Meet the Team</h2>
      <p>
        Our team consists of experienced professionals from various fields, including software development, 
        project management, and AI research. Together, we are dedicated to providing the best experience 
        for our users and continuously improving our platform.
      </p>
    </div>
  );
};

export default AboutPage;
