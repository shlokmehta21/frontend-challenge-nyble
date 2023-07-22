import React from 'react';
import { SidebarWrapper } from './styles/Sidebar';

export type SidebarPropsType = {
  isOpen: boolean;
  background?: string;
  children: React.ReactNode;
};

const Sidebar = ({ isOpen, background, children }: SidebarPropsType) => {
  return (
    <SidebarWrapper background={background} isOpen={isOpen}>
      {children}
    </SidebarWrapper>
  );
};

export default Sidebar;
