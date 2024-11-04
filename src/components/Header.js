// import React from 'react';
// import './Header.css';

// const Header = () => {
//   return (
//     <header className="header">
//       <h1></h1>
//       <nav>
//         <a href="#about">About us</a>
//         <a href="#careers">Careers</a>
//         <a href="#blog">Blog</a>
//         <a href="#contact">Contact us</a>
//       </nav>
//       <div className="header-buttons">
//         <button>Get A Demo</button>
//         <button>Log In</button>
//       </div>
//     </header>
//   );
// };

// export default Header;
// Home.js
import React from 'react';
import Header from './Header'; // Import the Header component
import './Home.css'; // Add your home-specific styles

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <h2>Welcome to Vaffle.AI</h2>
        <p>Your content goes here...</p>
      </main>
    </div>
  );
};

export default Home;
