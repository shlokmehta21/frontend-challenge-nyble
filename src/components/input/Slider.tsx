import React, { useMemo } from 'react';
import { default as MuiSlider, SliderProps } from '@mui/material/Slider';
import { useTheme } from 'styled-components';

export type SliderPropsType = {
  sliderColor?: string;
  sliderWidth?: string;

  marginBottom?: string;
} & SliderProps;

const Slider = ({ sliderColor, sliderWidth = '100%', marginBottom, ...props }: SliderPropsType) => {
  const theme = useTheme();

  const sliderProps = useMemo(
    () =>
      ({
        ...props,
        sx: {
          color: sliderColor ? sliderColor : theme.colours.primary,
          width: sliderWidth,
          marginBottom: marginBottom,
          ...(props && props.sx),
        },
      } as SliderProps),
    [sliderColor, sliderWidth, props]
  );

  return <MuiSlider {...sliderProps} />;
};

export default Slider;
