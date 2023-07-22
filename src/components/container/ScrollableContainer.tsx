import React from 'react';
import { ScrollableContainerWrapper } from './styles/ScrollableContainer';

export type ScrollableContainerPropsType = {
  children: React.ReactChildren;
};

const ScrollableContainer = ({ children }: ScrollableContainerPropsType) => {
  return <ScrollableContainerWrapper>{children}</ScrollableContainerWrapper>;
};

export default ScrollableContainer;
