import React from 'react';
import { useTheme } from 'styled-components';

type HeartIconPropsType = {
  color?: string;
  width: number;
  height: number;
};
const HeartIcon = ({ color, width, height }: HeartIconPropsType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.9996 20.4077C13.5078 20.7157 13.0971 20.9544 12.8078 21.1169C12.6545 21.203 12.5001 21.2867 12.3447 21.3688L12.3438 21.3693L12.3426 21.3699C12.1276 21.4803 11.8725 21.4803 11.6574 21.3699C11.5008 21.2884 11.3461 21.2033 11.1922 21.1169C10.9029 20.9544 10.4922 20.7157 10.0004 20.4077C9.01844 19.7929 7.70549 18.8973 6.38882 17.7763C3.80141 15.5735 1 12.3318 1 8.51351C1 5.052 3.82903 2.5 6.73649 2.5C9.02981 2.5 10.8808 3.72621 12 5.60482C13.1192 3.72621 14.9702 2.5 17.2635 2.5C20.171 2.5 23 5.052 23 8.51351C23 12.3318 20.1986 15.5735 17.6112 17.7763C16.2945 18.8973 14.9816 19.7929 13.9996 20.4077Z"
        fill={color ? color : '#BCF0F5'}
      />
    </svg>
  );
};

export default HeartIcon;