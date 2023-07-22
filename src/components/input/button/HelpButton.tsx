import React from 'react';

import { HelpButtonWrapper } from './styles/HelpButton';

import HelpIcon from 'images/HelpIcon';

type HelpButtonPropsType = {
  colour?: string;
  onClick: () => void;
};

const HelpButton = ({ colour, onClick }: HelpButtonPropsType) => {
  return (
    <HelpButtonWrapper onClick={onClick}>
      <HelpIcon width={30} height={30} stroke={colour ? colour : undefined} />
    </HelpButtonWrapper>
  );
};

export default HelpButton;
