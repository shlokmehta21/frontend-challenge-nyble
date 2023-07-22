import theme from 'GlobalTheme';
import React from 'react';
import { SidebarButtonWrapper, SidebarPrimaryButtonWrapper } from './styles/SidebarButton';

export type SidebarButtonPropsType = {
  justifyContent?: string;

  onClick?: () => void;
  clicked?: boolean;
  children: React.ReactNode;
};

const SidebarButton = ({ justifyContent, children, onClick }: SidebarButtonPropsType) => {
  return (
    <SidebarButtonWrapper onClick={onClick} justifyContent={justifyContent}>
      {children}
    </SidebarButtonWrapper>
  );
};

export const SidebarPrimaryButton = ({
  justifyContent,
  children,
  clicked,
  onClick,
}: SidebarButtonPropsType) => {
  return (
    <SidebarPrimaryButtonWrapper onClick={onClick} justifyContent={justifyContent}>
      {children}
    </SidebarPrimaryButtonWrapper>
  );
};
export default SidebarButton;
