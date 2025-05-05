import React, { useEffect, useState } from 'react';
import '../styles/components/Loader.css';

const Loader = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      onComplete();
    }, 3000); // 3 second loading

    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div className="loader-screen">
      <h1 className="loader-text">Booting Your Universe<span className="dots">...</span></h1>
    </div>
  ) : null;
};

export default Loader;
