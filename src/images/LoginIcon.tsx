import React from 'react';
import { useTheme } from 'styled-components';

type LoginIconPropsType = {
  stroke?: string;
  width: number;
  height: number;
};

const LoginIcon = ({ stroke, width, height }: LoginIconPropsType) => {
  const theme = useTheme();

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="entrance">
        <g id="Icon/arrow-right">
          <g id="Icon/arrow-down">
            <path
              id="Path 2"
              d="M4.5 12H13.5"
              stroke={stroke ? stroke : theme.colours.primary}
              strokeLinecap="round"
            />
            <path
              id="Path 3"
              d="M10.5 15L13.5 12L10.5 9"
              stroke={stroke ? stroke : theme.colours.primary}
              strokeLinecap="round"
            />
          </g>
        </g>
        <path
          id="Rectangle 2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18 4V20H7L7 4L18 4Z"
          stroke={stroke ? stroke : theme.colours.primary}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default LoginIcon;
