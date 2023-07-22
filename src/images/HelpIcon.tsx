import React from 'react';
import { useTheme } from 'styled-components';

type HelpIconPropsType = {
  stroke?: string;
  width: number;
  height: number;
};

const HelpIcon = ({ stroke, width, height }: HelpIconPropsType) => {
  const theme = useTheme();

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5 20.417c0-2.917 2.298-3.405 3.09-4.195a4.375 4.375 0 10-7.221-4.54"
        stroke={stroke ? stroke : theme.colours.white}
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5 26.25a1.458 1.458 0 100-2.917 1.458 1.458 0 000 2.917z"
        fill={stroke ? stroke : theme.colours.white}
      />
      <path
        clipRule="evenodd"
        d="M17.5 32.083c8.054 0 14.583-6.529 14.583-14.583S25.554 2.917 17.5 2.917 2.917 9.446 2.917 17.5 9.446 32.083 17.5 32.083z"
        stroke={stroke ? stroke : theme.colours.white}
      />
    </svg>
  );
};

export default HelpIcon;
