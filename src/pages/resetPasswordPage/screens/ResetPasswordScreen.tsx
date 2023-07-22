import React from 'react';
import { Formik, FormikHelpers, FormikErrors } from 'formik';
import { useApolloClient } from '@apollo/client';

import {
  FormContentWrapper,
  ResetPasswordScreenWrapper,
  StyledForm,
} from './styles/ResetPasswordScreen';

import { getPasswordRequirementsSatisfactionInfo } from 'utils/password';

import { useToast } from 'components/widget/toast/Toast';
import Spacer from 'components/position/Spacer';
import { ButtonText, FormBody, FormHeader } from 'components/styling/Form';
import Button from 'components/input/button/Button';
import Link from 'components/input/Link';
import TextInputSection from 'components/input/formik/TextInputSection';
import SubmitButton from 'components/input/formik/SubmitButton';

import sendResetPasswordMutation from 'graphql/generated/mutations/resetPasswordMutation';
import { ERROR_CODES } from 'graphql/errorCodes';
import { LargeText, MediumText, SmallText } from 'components/styling/Text';

type ResetPasswordScreenPropsType = {
  token: string;
  onResetPasswordSuccess: () => void;
  onResetPasswordFailure: () => void;
  onTokenExpired: () => void;
};

type ResetPasswordScreenContentType = {
  newPassword: string;
  newPasswordRepeated: string;
};

const ResetPasswordScreen = ({
  token,
  onResetPasswordSuccess,
  onResetPasswordFailure,
  onTokenExpired,
}: ResetPasswordScreenPropsType) => {
  const initialValues: ResetPasswordScreenContentType = {
    newPassword: '',
    newPasswordRepeated: '',
  };

  const [openSuccessToast] = useToast();
  const apolloClient = useApolloClient();

  const onSuccessfulPasswordReset = (actions: FormikHelpers<ResetPasswordScreenContentType>) => {
    actions.resetForm();
  };

  const validateAndSubmitResetPasswordRequest = (values: ResetPasswordScreenContentType) => {
    let errors: FormikErrors<ResetPasswordScreenContentType> = {};

    if (values.newPassword != values.newPasswordRepeated) {
      errors.newPassword = 'Passwords must match';
    }
    const passwordRequirementsSatisfaction = getPasswordRequirementsSatisfactionInfo(
      values.newPassword
    );

    if (passwordRequirementsSatisfaction.unsatisfied.length > 0) {
      const passwordRequirementsError = `Password must include
- 8+ characters
- At least 1 number
- At least 1 lowercase
- At least 1 uppercase`;

      errors.newPasswordRepeated = passwordRequirementsError;
    }

    if (Object.keys(errors).length > 0) {
      return errors;
    }
    return sendResetPasswordMutation(apolloClient, {
      token: token,
      newPassword: values.newPassword,
    })
      .then((result) => {
        if (result.data.resetPassword.success) {
          onResetPasswordSuccess();
          return {};
        }
        switch (result.data.resetPassword.error.code) {
          case ERROR_CODES.RedisKeyNoExistError:
            onTokenExpired();
            break;
          default:
            onResetPasswordFailure();
            break;
        }
        return errors;
      })
      .catch((error) => {
        errors.newPasswordRepeated = '';
        return errors;
      });
  };

  return (
    <ResetPasswordScreenWrapper>
      <FormContentWrapper>
        <LargeText bold marginBottom="8px">
          Reset Password
        </LargeText>
        <MediumText bold marginBottom="16px">
          Enter your new password
        </MediumText>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            onSuccessfulPasswordReset(actions);
          }}
          validate={validateAndSubmitResetPasswordRequest}
          validateOnChange={false}
          validateOnBlur={false}
        >
          <StyledForm>
            <TextInputSection name="newPassword" placeholder="New Password" isPassword />
            <TextInputSection
              name="newPasswordRepeated"
              placeholder="Confirm New Password"
              isPassword
            />
            <Spacer height={48} />
            <SubmitButton alignSelf="center" width="200px">
              <SmallText bold color="white">
                Reset Password
              </SmallText>
            </SubmitButton>
          </StyledForm>
        </Formik>
      </FormContentWrapper>
    </ResetPasswordScreenWrapper>
  );
};

export default ResetPasswordScreen;
