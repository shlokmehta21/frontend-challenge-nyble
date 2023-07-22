import React from 'react';
import { useTheme } from 'styled-components';

type ShoppingCartPropsType = {
  stroke?: string;
  fill?: boolean;
  width: number;
  height: number;
};

const ShoppingCart = ({ stroke, width, height, fill }: ShoppingCartPropsType) => {
  const theme = useTheme();

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 50"
      fill={fill ? theme.colours.blueGrey : theme.colours.primary}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M11.897 12.5h32.462l-3.092 18.75H14.988L11.897 12.5z"
        stroke={stroke ? stroke : theme.colours.primary}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M18.75 41.667a2.083 2.083 0 100-4.167 2.083 2.083 0 000 4.167zM37.5 41.667a2.083 2.083 0 100-4.167 2.083 2.083 0 000 4.167z"
        stroke={stroke ? stroke : theme.colours.primary}
      />
      <path
        d="M14.583 12.5H6.25"
        stroke={stroke ? stroke : theme.colours.primary}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ShoppingCart;
