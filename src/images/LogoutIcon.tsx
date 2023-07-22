import React from 'react';
import { useTheme } from 'styled-components';

type LogoutIconPropsType = {
  stroke?: string;
  width: number;
  height: number;
};

const LogoutIcon = ({ stroke, width, height }: LogoutIconPropsType) => {
  const theme = useTheme();

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="exit">
        <path
          id="Rectangle 2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 4V20H4L4 4L15 4Z"
          stroke={stroke ? stroke : theme.colours.primary}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="Icon/arrow-right">
          <g id="Icon/arrow-down">
            <path
              id="Path 2"
              d="M12.5 12H21.5"
              stroke={stroke ? stroke : theme.colours.primary}
              strokeLinecap="round"
            />
            <path
              id="Path 3"
              d="M18.5 15L21.5 12L18.5 9"
              stroke={stroke ? stroke : theme.colours.primary}
              strokeLinecap="round"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default LogoutIcon;
