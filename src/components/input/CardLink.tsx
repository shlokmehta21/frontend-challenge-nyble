import React from 'react';
import { ChevronRight } from 'react-feather';
import { useTheme } from 'styled-components';
import { ArrowWrapper, CardLinkWrapper } from './styles/CardLink';

export type CardLinkPropsType = {
  children: React.ReactNode;
  onClick?: () => void;
  marginBottom?: string;
  background?: string;
};

const CardLink = ({ children, onClick, marginBottom, background }: CardLinkPropsType) => {
  const theme = useTheme();

  return (
    <CardLinkWrapper background={background} onClick={onClick} marginBottom={marginBottom}>
      {children}
    </CardLinkWrapper>
  );
};

export default CardLink;
