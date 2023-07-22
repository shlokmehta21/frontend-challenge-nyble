import React from 'react';

import { SendPasswordResetFormWrapper } from './styles/SendPasswordResetForm';
import SendPasswordResetForm from '../shared/SendPasswordResetForm';

type SendPasswordResetScreenPropsType = {
  onSuccessfulSubmit: (email: string) => void;
};

const SendPasswordResetScreen = ({ onSuccessfulSubmit }: SendPasswordResetScreenPropsType) => {
  return (
    <SendPasswordResetFormWrapper>
      <SendPasswordResetForm onSuccessfulSubmit={onSuccessfulSubmit} />
    </SendPasswordResetFormWrapper>
  );
};

export default SendPasswordResetScreen;
