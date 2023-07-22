import React from 'react';
import { Formik, FormikErrors } from 'formik';
import { useApolloClient } from '@apollo/client';

import { SendPasswordResetFormWrapper, StyledForm } from '../screens/styles/SendPasswordResetForm';

import { ButtonText, FormBody, FormHeader } from 'components/styling/Form';
import Button from 'components/input/button/Button';
import Link from 'components/input/Link';
import Spacer from 'components/position/Spacer';
import TextInputSection from 'components/input/formik/TextInputSection';
import SubmitButton from 'components/input/formik/SubmitButton';
import { validateEmail } from 'utils/validation/validate';

import sendSendResetPasswordLinkMutation from 'graphql/generated/mutations/sendResetPasswordLinkMutation';
import { LargeText, MediumText } from 'components/styling/Text';

type SendPasswordResetFormPropsType = {
  onSuccessfulSubmit: (email: string) => void;
};

const SendPasswordResetForm = ({ onSuccessfulSubmit }: SendPasswordResetFormPropsType) => {
  type SendPasswordResetFormValues = {
    email: string;
  };

  const initialValues: SendPasswordResetFormValues = {
    email: '',
  };

  const apolloClient = useApolloClient();

  const validateOnSubmit = (values: SendPasswordResetFormValues) => {
    let errors: FormikErrors<SendPasswordResetFormValues> = {};

    if (values.email == '') {
      errors.email = 'Required';
      return errors;
    } else if (!validateEmail(values.email)) {
      errors.email = 'Invalid email format';
      return errors;
    }

    return sendSendResetPasswordLinkMutation(apolloClient, { email: values.email })
      .then((result) => {
        if (result.data.sendResetPasswordLink.data) {
          return {};
        }
        errors.email = 'Failed to send password reset link';
        return errors;
      })
      .catch((reason) => {
        errors.email = 'Failed to send password reset link';
        return errors;
      });
  };

  return (
    <SendPasswordResetFormWrapper>
      <LargeText bold marginBottom="8px">
        Reset Password
      </LargeText>
      <MediumText marginBottom="24px">We'll send a link to your email</MediumText>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          onSuccessfulSubmit(values.email);
          actions.resetForm();
        }}
        validate={validateOnSubmit}
        validateOnChange={false}
        validateOnBlur={false}
      >
        <StyledForm>
          <TextInputSection name="email" forceLower placeholder="Email Address" />
          <Spacer height={16} />
          <SubmitButton>
            <ButtonText color="white">Send Link</ButtonText>
          </SubmitButton>
        </StyledForm>
      </Formik>
    </SendPasswordResetFormWrapper>
  );
};

export default SendPasswordResetForm;
