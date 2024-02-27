import { useCallback, useEffect, useState } from 'react';

export default function useScroll() {
  const [isScrolled, setScrolled] = useState(false);
  const [isReduce, setReduce] = useState(window.scrollY);

  // Callback
  const handleScroll = useCallback(() => {
    if (window.scrollY > 200) {
      if (isReduce > window.scrollY) {
        setScrolled(false);
      } else if (isReduce < window.scrollY) {
        setScrolled(true);
      }
      setReduce(window.scrollY);
    } else {
      setScrolled(false);
    }
  }, [isReduce]);

  useEffect(() => {
    setReduce(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isReduce, handleScroll]);

  return { isScrolled };
}
