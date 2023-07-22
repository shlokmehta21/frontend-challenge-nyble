import React from 'react';
import { ProgressWrapper } from './styles/ProgressBar';

type ProgressBarPropsType = {
  value: number;
  color?: string;
  background?: string;
  maxWidth?: string;
  height?: string;
};

const ProgressBar = ({ color, background, maxWidth, value, height }: ProgressBarPropsType) => {
  const spaceBetween = 8;

  return (
    <ProgressWrapper color={color} background={background} maxWidth={maxWidth} height={height}>
      <progress max={1} value={value} />
    </ProgressWrapper>
  );
};

export default ProgressBar;
