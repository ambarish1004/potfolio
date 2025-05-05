// // src/containers/Hero.jsx
// import React from 'react';
// import '../styles/components/Hero.css'; // optional if you want to style separately
// import myImage from '../assets/img.jpg'; // add your image to /src/assets/

// const Hero = () => {
//   return (
//     <section className="hero">
//       <img src={myImage} alt="Your Name" className="hero-img" />
//       <div className="hero-text">
//         <h1>Hello, I'm Aryan</h1>
//         <p>Building brutalist web experiences with hacker aesthetics 🔥</p>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React from 'react';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div>
      <Hero />
      {/* More sections will go here */}
    </div>
  );
};

export default Home;
