import { useWindowSize } from 'utils/windowSize/useWindowSize';
import { useCallback } from 'react';
import { useTheme } from 'styled-components';

type WindowSizeSwitchProps<T> = {
  mobile?: T;
  tablet?: T;
  desktop?: T;
};

const useWindowSizeSwitch = (): (<T>(props: WindowSizeSwitchProps<T>) => T) => {
  const [width] = useWindowSize();
  const theme = useTheme();

  const windowSizeSwitch = useCallback(
    <T,>(props: WindowSizeSwitchProps<T>) => {
      if (width >= theme.breakpoints.desktop && props.desktop) {
        return props.desktop;
      }
      if (width >= theme.breakpoints.tablet && props.tablet) {
        return props.tablet;
      }
      if (props.mobile) {
        return props.mobile;
      }
      if (props.tablet) {
        return props.tablet;
      }
      return props.desktop;
    },
    [width, theme]
  );

  return windowSizeSwitch;
};

export default useWindowSizeSwitch;
