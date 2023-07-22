import React from 'react';
import { useTheme } from 'styled-components';

type PersonIconPropsType = {
  stroke?: string;
  width: number;
  height: number;
};

const PersonIcon = ({ stroke, width, height }: PersonIconPropsType) => {
  const theme = useTheme();

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.667 33.333c0-5 6.666-5 10-8.333 1.666-1.667-3.334-1.667-3.334-10 0-5.555 2.222-8.333 6.667-8.333S26.667 9.445 26.667 15c0 8.333-5 8.333-3.334 10 3.334 3.333 10 3.333 10 8.333"
        stroke={stroke ? stroke : theme.colours.white}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default PersonIcon;
