import React from 'react';
import { DropdownItemWrapper } from './styles/DropdownItem';

type DropdownItemPropsType = {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

const DropdownItem = ({ children, onClick }: DropdownItemPropsType) => {
  return <DropdownItemWrapper onClick={onClick}>{children}</DropdownItemWrapper>;
};

export default DropdownItem;
