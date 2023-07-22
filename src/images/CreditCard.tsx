import React from 'react';
import { useTheme } from 'styled-components';

type CreditCardPropsType = {
  stroke?: string;
  width: number;
  height: number;
};

const CreditCard = ({ stroke, width, height }: CreditCardPropsType) => {
  const theme = useTheme();

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4.167"
        y="10.417"
        width="41.667"
        height="29.167"
        rx="2"
        stroke={stroke ? stroke : theme.colours.primary}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.167 29.167h41.666"
        stroke={stroke ? stroke : theme.colours.primary}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CreditCard;
