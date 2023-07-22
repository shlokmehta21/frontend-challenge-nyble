import React from 'react';
import { useTheme } from 'styled-components';

import { BounceLoader } from 'react-spinners';
import { ResetPasswordLoadingScreenWrapper } from './styles/ResetPasswordLoadingScreen';
import { FormHeader, FormBody } from 'components/styling/Form';

const ResetPasswordLoadingScreen = () => {
  const theme = useTheme();

  return (
    <ResetPasswordLoadingScreenWrapper>
      <BounceLoader color={theme.colours.primary} />
    </ResetPasswordLoadingScreenWrapper>
  );
};

export default ResetPasswordLoadingScreen;
