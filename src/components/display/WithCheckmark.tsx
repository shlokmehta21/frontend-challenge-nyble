import Spacer from 'components/position/Spacer';
import CheckmarkCircle from 'images/CheckmarkCircle';
import React from 'react';
import { useTheme } from 'styled-components';
import { WithCheckmarkWrapper } from './styles/WithCheckmark';
import { Check } from 'react-feather';

type WithCheckmarkPropsType = {
  marginBottom?: string;
  children: React.ReactNode;
  color?: string;
};

const WithCheckmark = ({ marginBottom, children, color }: WithCheckmarkPropsType) => {
  const theme = useTheme();

  return (
    <WithCheckmarkWrapper marginBottom={marginBottom}>
      <Check width={25} height={25} stroke={color ? color : theme.newColours.black} />
      <Spacer width={8} />
      {children}
    </WithCheckmarkWrapper>
  );
};

export default WithCheckmark;
