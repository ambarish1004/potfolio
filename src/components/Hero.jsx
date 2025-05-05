import React, { useEffect, useRef } from 'react';
import '../styles/components/Hero.css';
import gsap from 'gsap';

const Hero = () => {
  const titleRef = useRef();
  const subtitleRef = useRef();
  const bgRef = useRef();

  useEffect(() => {
    gsap.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
    });
    gsap.from(subtitleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      delay: 0.3,
      ease: "power4.out",
    });
  }, []);

  return (
    <section className="hero" ref={bgRef}>
      <div className="parallax-bg" />
      <div className="hero-content">
        <h1 ref={titleRef}>I’m [Your Name]</h1>
        <p ref={subtitleRef}>A Developer Who Turns Ideas into 🔥 Experiences</p>
      </div>
    </section>
  );
};

export default Hero;
