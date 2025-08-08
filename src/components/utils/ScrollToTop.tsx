import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    const prevPathname = prevPathnameRef.current;
    prevPathnameRef.current = pathname;

    if (hash) {
      // Si hay un hash en la URL, hacer scroll hacia ese elemento
      const scrollToElement = () => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      };

      // Si cambió la ruta, esperar un poco más para que se renderice
      const delay = prevPathname !== pathname ? 300 : 100;
      setTimeout(scrollToElement, delay);
    } else if (prevPathname !== pathname) {
      // Solo hacer scroll hacia arriba si cambió la ruta y no hay hash
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;