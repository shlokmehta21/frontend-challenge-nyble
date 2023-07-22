import React from 'react';
import ProgressBarSection from './ProgressBarSection';
import { DiscreteProgressBarWrapper } from './styles/DiscreteProgressBar';

type DiscreteProgressBarPropsType = {
  sections: number;
  currentSection: number;
  height: string;
  width: string;
  color: string;
};

const DiscreteProgressBar = ({
  sections,
  currentSection,
  height,
  width,
  color,
}: DiscreteProgressBarPropsType) => {
  const spaceBetween = 8;

  return (
    <DiscreteProgressBarWrapper width={width}>
      {Array(sections)
        .fill(undefined)
        .map((_, ind) => (
          <ProgressBarSection
            width={`calc(${100 / sections}% - ${(spaceBetween * (sections - 1)) / sections}px)`}
            height={height}
            completed={ind <= currentSection}
            key={ind}
            marginRight={ind != sections - 1 && `${spaceBetween}px`}
            colour={color}
          />
        ))}
    </DiscreteProgressBarWrapper>
  );
};

export default DiscreteProgressBar;
