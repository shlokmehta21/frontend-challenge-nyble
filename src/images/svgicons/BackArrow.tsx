import React from 'react';
import { useTheme } from 'styled-components';

type BackArrowPropsType = {
  stroke?: string;
  width?: number;
  height?: number;
};

const BackArrow = ({ stroke, width = 37, height = 37 }: BackArrowPropsType) => {
  const theme = useTheme();

  return (
    <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.583 9.25l-9.25 9.25 9.25 9.25" stroke={stroke} strokeLinecap="round" />
    </svg>
  );
};

export default BackArrow;
