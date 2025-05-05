import { useEffect } from 'react';

const useKeyboardControls = () => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      console.log("KEY PRESSED:", e.key);
      // Example: navigate or trigger scroll effects here
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
};

export default useKeyboardControls;
