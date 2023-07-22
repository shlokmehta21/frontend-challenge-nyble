import React from 'react';

import { BackButtonWrapper } from './styles/BackButton';

import BackArrow from 'images/BackArrow';

type BackButtonPropsType = {
  colour?: string;
  onClick: () => void;
};

const BackButton = ({ colour, onClick }: BackButtonPropsType) => {
  return (
    <BackButtonWrapper onClick={onClick}>
      <BackArrow width={30} height={30} stroke={colour ? colour : undefined} />
    </BackButtonWrapper>
  );
};

export default BackButton;
