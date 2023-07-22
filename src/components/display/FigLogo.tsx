import React from 'react';
import { FigLogoWrapper } from 'components/display/styles/FigLogo';

type FigLogoPropsType = {
  size: number;
};

const FigLogo = ({ size }: FigLogoPropsType) => <FigLogoWrapper size={size} />;

export default FigLogo;
