import React, { HTMLProps } from 'react';
import { LinkWrapper, LogoLinkWrapper } from './styles/Link';

type LinkPropsType = {
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  href?: string;
  target?: string;
};

const Link = ({ children, onClick, className, ...props }: LinkPropsType) => (
  <LinkWrapper className={className} onClick={onClick} {...props}>
    {children}
  </LinkWrapper>
);

export const LogoLink = ({ children, onClick, className, ...props }: LinkPropsType) => (
  <LogoLinkWrapper className={className} onClick={onClick} {...props}>
    {children}
  </LogoLinkWrapper>
);

export default Link;
