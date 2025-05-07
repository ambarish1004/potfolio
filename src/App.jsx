// import React, { useEffect } from 'react';
// import Lenis from '@studio-freight/lenis';
// import './styles/layout.css';
// import useKeyboardControls from './hooks/useKeyboardControls';

// const App = () => {
//   // Set up Lenis smooth scrolling
//   useEffect(() => {
//     const lenis = new Lenis({
//       lerp: 0.1, // Adjust this to get smoother or more snappy scroll
//       smoothWheel: true,
//       smoothTouch: true,
//     });

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);
//   }, []);

//   // Use keyboard controls for smooth transitions
//   useKeyboardControls();

//   return (
//     <>
//       <section className="section">
//         <div className="content">Welcome to my Portfolio</div>
//       </section>
//       <section className="section">
//         <div className="content">About Me</div>
//       </section>
//       <section className="horizontal-section">
//         <div className="content">Project 1</div>
//         <div className="content">Project 2</div>
//         <div className="content">Project 3</div>
//       </section>
//       <section className="section">
//         <div className="content">Contact</div>
//       </section>
//     </>
//   );
// };

// export default App;


import React from 'react';
import ThreeScene from './components/ThreeScene';
import './styles/layout.css';

const App = () => {
  return (
    <>
      <ThreeScene />
      <section className="section">
        <div className="content">Welcome to my Portfolio</div>
      </section>
      <section className="section">
        <div className="content">About Me</div>
      </section>
      <section className="horizontal-section">
        <div className="content">Project 1</div>
        <div className="content">Project 2</div>
        <div className="content">Project 3</div>
      </section>
      <section className="section">
        <div className="content">Contact</div>
      </section>
    </>
  );
};

export default App;
