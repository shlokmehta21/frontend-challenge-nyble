import Spacer from 'components/position/Spacer';
import ForwardArrow from 'images/ForwardArrow';
import React from 'react';
import { useTheme } from 'styled-components';
import { SidebarItemWrapper } from './styles/SidebarMenuItem';

export type SidebarItemPropsType = {
  onClick?: () => void;
  children: React.ReactNode;
  background?: string;
};

const SidebarMenuItem = ({ children, onClick, background }: SidebarItemPropsType) => {
  const theme = useTheme();
  return (
    <SidebarItemWrapper onClick={onClick} background={background}>
      <ForwardArrow fill={theme.colours.primary} />
      <Spacer width={8} />
      {children}
    </SidebarItemWrapper>
  );
};

export default SidebarMenuItem;
