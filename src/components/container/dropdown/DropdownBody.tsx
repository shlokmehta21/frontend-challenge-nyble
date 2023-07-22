import React from 'react';
import { DropdownBodyWrapper } from './styles/DropdownBody';

type DropdownBodyPropsType = {
  children: React.ReactNode;
  width?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

const DropdownBody = ({ children, width, onClick }: DropdownBodyPropsType) => {
  return (
    <DropdownBodyWrapper onClick={onClick} width={width}>
      {children}
    </DropdownBodyWrapper>
  );
};

export default DropdownBody;
