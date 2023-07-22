import React, { useRef } from 'react';

import FadeIn from 'react-fade-in';
import useOnClickOutside from 'use-onclickoutside';
import { DropdownContainerWrapper } from './styles/DropdownContainer';

type DropdownContainerPropsType = {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
  body: React.ReactNode;
};

const DropdownContainer = ({ children, isOpen, handleClose, body }: DropdownContainerPropsType) => {
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, handleClose);

  return (
    <DropdownContainerWrapper ref={ref}>
      {children}
      {isOpen && <FadeIn>{body}</FadeIn>}
    </DropdownContainerWrapper>
  );
};

export default DropdownContainer;
