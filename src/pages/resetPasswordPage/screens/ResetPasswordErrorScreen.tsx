import React from 'react';
import { useTheme } from 'styled-components';

import { ResetPasswordErrorScreenWrapper } from './styles/ResetPasswordErrorScreen';
import { FormHeader, FormBody, ButtonText } from 'components/styling/Form';
import Button from 'components/input/button/Button';
import Link from 'components/input/Link';

import { RESET_PASSWORD_PAGE } from 'Routes';

const ResetPasswordErrorScreen = () => {
  return (
    <ResetPasswordErrorScreenWrapper>
      <FormHeader marginBottom="8px" textAlign="center">
        The password reset link has expired or is invalid. Please resubmit or double check the link.
      </FormHeader>
      <Link href={RESET_PASSWORD_PAGE}>
        <Button>
          <ButtonText>Resubmit</ButtonText>
        </Button>
      </Link>
    </ResetPasswordErrorScreenWrapper>
  );
};

export default ResetPasswordErrorScreen;
