import { useEffect } from 'react';

export default function useKeyboardControls() {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown') {
        window.scrollBy(0, window.innerHeight); // Scroll down
      } else if (e.key === 'ArrowUp') {
        window.scrollBy(0, -window.innerHeight); // Scroll up
      } else if (e.key === 'ArrowRight') {
        document.querySelector('.horizontal-section').scrollBy(100, 0); // Scroll right (horizontal)
      } else if (e.key === 'ArrowLeft') {
        document.querySelector('.horizontal-section').scrollBy(-100, 0); // Scroll left (horizontal)
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
}
