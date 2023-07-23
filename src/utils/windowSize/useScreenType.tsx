import { useMemo } from 'react';
import { useTheme } from 'styled-components';
import { useWindowSize } from './useWindowSize';

export type CurrScreensOn = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

const useScreenType = (): CurrScreensOn => {
  const [width] = useWindowSize();
  const theme = useTheme();

  const answer = useMemo(
    () => ({
      isMobile: width < theme.breakpoints.tablet,
      isTablet: width >= theme.breakpoints.tablet && width < theme.breakpoints.desktop,
      isDesktop: width >= theme.breakpoints.desktop,
    }),
    [width, theme]
  );

  return answer;
};

export default useScreenType;
