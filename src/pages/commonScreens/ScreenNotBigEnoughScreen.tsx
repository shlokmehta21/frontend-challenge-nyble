import { FormHeader } from 'components/styling/Form';
import React from 'react';
import { ScreenNotBigEnoughScreenWrapper } from './styles/ScreenNotBigEnoughScreen';

const ScreenNotBigEnoughScreen = ({}) => {
  return (
    <ScreenNotBigEnoughScreenWrapper>
      <FormHeader>Sorry, your screen is not big enough to view this page</FormHeader>
    </ScreenNotBigEnoughScreenWrapper>
  );
};

export default ScreenNotBigEnoughScreen;
