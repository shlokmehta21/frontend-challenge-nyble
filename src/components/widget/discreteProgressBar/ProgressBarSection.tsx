import React from 'react';
import { useTheme } from 'styled-components';
import { ProgressBarSectionWrapper, SectionFill } from './styles/ProgressBarSection';

export type ProgressBarSectionPropsType = {
  width: string;
  height?: string;
  completed: boolean;
  colour?: string;

  marginRight?: string;
};

const ProgressBarSection = ({
  height,
  width,
  completed,
  colour,
  marginRight,
}: ProgressBarSectionPropsType) => {
  const theme = useTheme();

  return (
    <ProgressBarSectionWrapper height={height} width={width} marginRight={marginRight}>
      <SectionFill filled={completed} color={colour} />
    </ProgressBarSectionWrapper>
  );
};

export default ProgressBarSection;
