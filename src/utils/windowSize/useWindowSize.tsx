import { useCallback, useLayoutEffect, useRef, useState } from 'react';

export const useWindowSize = (): [width: number, height: number] => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const updateSize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return [width, height];
};

// Just like useWindowSize except this won't change for most screen resizes
export const useDebouncedWindowSize = (): [width: number, height: number] => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const updateSize = () => {
      if (width == 0) {
        setWidth(window.innerWidth);
      }
      if (height == 0) {
        setHeight(window.innerHeight);
      }
    };

    window.addEventListener('resize', updateSize);
    updateSize();
    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, [width, height]);

  return [width, height];
};
