import React from 'react';
import { useTheme } from 'styled-components';

type ForwardArrowPropsType = {
  fill?: string;
  width?: number;
  height?: number;
};

const ForwardArrow = ({ fill, width = 9, height = 14 }: ForwardArrowPropsType) => {
  const theme = useTheme();

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.17 7.027c.002.164-.03.327-.095.478-.064.152-.158.29-.278.406l-5.152 4.976a1.332 1.332 0 0 1-1.829 0 1.247 1.247 0 0 1-.28-.405 1.212 1.212 0 0 1 .28-1.361L5.08 7.026.984 2.922a1.248 1.248 0 0 1-.311-.41A1.209 1.209 0 0 1 .953 1.1 1.33 1.33 0 0 1 2.428.888c.159.077.299.185.411.317L7.81 6.181c.227.228.356.53.36.846Z"
        fill={fill ? fill : theme.colours.darkGrey}
      />
    </svg>
  );
};

export default ForwardArrow;
