import React from 'react';
import { useTheme } from 'styled-components';

type LockPropsType = {
  stroke?: string;
  width: number;
  height: number;
};

const Lock = ({ stroke, width = 50, height = 49 }: LockPropsType) => {
  const theme = useTheme();

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke={stroke ? stroke : theme.colours.darkGrey}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.417 22.459h29.167v20.417H10.417zM14.583 16.542c0-5.753 4.664-10.417 10.417-10.417v0c5.753 0 10.417 4.664 10.417 10.417v5.916H14.583v-5.916z"
      />
      <path
        clipRule="evenodd"
        d="M25 34.708c1.15 0 2.083-.914 2.083-2.041 0-1.128-.932-2.042-2.083-2.042-1.15 0-2.083.914-2.083 2.042 0 1.127.932 2.041 2.083 2.041z"
        stroke={stroke ? stroke : theme.colours.darkGrey}
      />
    </svg>
  );
};

export default Lock;
