import Spacer from 'components/position/Spacer';
import CheckmarkCircle from 'images/CheckmarkCircle';
import React from 'react';
import { useTheme } from 'styled-components';
import { WithCheckmarkWrapper } from './styles/WithCheckmark';

type WithIconPropsType = {
  marginBottom?: string;
  children: React.ReactNode;
  color?: string;
  alignItems?: string;
  maxWidth?: string;
  icon: any;
};

const WithIcon = ({
  marginBottom,
  children,
  icon,
  color,
  maxWidth,
  alignItems,
}: WithIconPropsType) => {
  const theme = useTheme();

  return (
    <WithCheckmarkWrapper maxWidth={maxWidth} alignItems={alignItems} marginBottom={marginBottom}>
      {icon}
      <Spacer width={8} />
      {children}
    </WithCheckmarkWrapper>
  );
};

export default WithIcon;
