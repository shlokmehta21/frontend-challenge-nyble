import React from 'react';
import { useTheme } from 'styled-components';

type CheckmarkCirclePropsType = {
  stroke?: string;
  width: number;
  height: number;
};

const CheckmarkCircle = ({ stroke, width, height }: CheckmarkCirclePropsType) => {
  const theme = useTheme();

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.583 27.083l6.25 6.25L35.417 18.75"
        stroke={stroke ? stroke : theme.colours.primary}
        strokeLinecap="round"
      />
      <path
        clipRule="evenodd"
        d="M25 45.833c11.506 0 20.833-9.327 20.833-20.833 0-11.506-9.327-20.833-20.833-20.833C13.494 4.167 4.167 13.494 4.167 25c0 11.506 9.327 20.833 20.833 20.833z"
        stroke={stroke ? stroke : theme.colours.primary}
      />
    </svg>
  );
};

export default CheckmarkCircle;
