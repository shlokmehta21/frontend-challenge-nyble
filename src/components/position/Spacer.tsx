import React from 'react';
import { SpacerDiv } from './styles/Spacer';

type SpacerPropsType = {
  width?: number;
  height?: number;
};

const Spacer = ({ width, height }: SpacerPropsType) => <SpacerDiv width={width} height={height} />;

export default Spacer;
