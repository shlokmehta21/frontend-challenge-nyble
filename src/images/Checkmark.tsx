import React from 'react';
import { useTheme } from 'styled-components';

type CheckmarkPropsType = {
  fill?: string;
  width?: number;
  height?: number;
};

const Checkmark = ({ fill, width = 24, height = 24 }: CheckmarkPropsType) => {
  const theme = useTheme();

  return (
    <svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.438 12.643a1.544 1.544 0 0 0-1-.342 1.536 1.536 0 0 0-.988.37 1.286 1.286 0 0 0-.448.885c-.021.335.097.666.332.926l3.243 3.105c.136.13.299.233.48.304a1.582 1.582 0 0 0 1.142.007c.18-.07.345-.17.482-.298l9.904-9.329c.134-.126.24-.275.311-.438a1.236 1.236 0 0 0-.016-1.024 1.34 1.34 0 0 0-.324-.43 1.488 1.488 0 0 0-.48-.284 1.593 1.593 0 0 0-1.123.014c-.177.07-.337.17-.472.296l-8.838 8.343-2.205-2.105Z"
        fill={fill ? fill : theme.colours.primary}
      />
    </svg>
  );
};

export default Checkmark;
