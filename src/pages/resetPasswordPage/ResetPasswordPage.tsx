import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

import { LOGIN_PAGE_ROUTE, RESET_PASSWORD_PAGE } from 'Routes';

import {
  ResetPasswordPageWrapper,
  FormContentWrapper,
  StyledForm,
} from './styles/ResetPasswordPage';

import {
  SCREENS,
  ScreenType,
  ResetPasswordPageAndGlobalStateType,
  useResetPasswordPageState,
  RESET_PASSWORD_SUCCESS,
  EXPIRED_TOKEN,
} from './resetPasswordPageState';

import ResetPasswordScreen from './screens/ResetPasswordScreen';
import ResetPasswordLoadingScreen from './screens/ResetPasswordLoadingScreen';
import SendPasswordResetScreen from './screens/SendPasswordResetScreen';
import ResetPasswordErrorScreen from './screens/ResetPasswordErrorScreen';

import { useToast } from 'components/widget/toast/Toast';
import resetPasswordScreenScreenDisplayPackages from './screenDisplayPackages/resetPasswordScreen';
import sendPasswordResetScreenScreenDisplayPackages from './screenDisplayPackages/sendPasswordResetScreen';
import resetPasswordDialogScreensScreenDisplayPackages from './screenDisplayPackages/resetPasswordDialogScreens';

export type ResetPasswordPagePropsType = {
  stateOverrides?: object;
};

const ResetPasswordPage = ({ stateOverrides }: ResetPasswordPagePropsType) => {
  const [state, dispatch] = useResetPasswordPageState(stateOverrides);
  const history = useHistory();

  const [openSuccessToast, openErrorToast] = useToast();

  const onSendPasswordLinkSuccess = (email: string) => {
    openSuccessToast(`A password reset email has been sent to ${email} if it exists`);
  };

  const resetPasswordSuccess = () => {
    dispatch({
      type: RESET_PASSWORD_SUCCESS,
    });
    openSuccessToast('Your password has been reset');
    history.push(LOGIN_PAGE_ROUTE);
  };

  const resetPasswordFailure = () => {
    openErrorToast('Failed to reset password');
  };

  const tokenExpired = () => {
    dispatch({
      type: EXPIRED_TOKEN,
    });
    openErrorToast('Password reset link has expired');
    history.push(RESET_PASSWORD_PAGE);
  };

  const screens = {
    [SCREENS.SEND_PASSWORD_RESET_SCREEN]: (currState: ResetPasswordPageAndGlobalStateType) => (
      <SendPasswordResetScreen onSuccessfulSubmit={onSendPasswordLinkSuccess} />
    ),
    [SCREENS.RESET_PASSWORD_SCREEN]: (currState: ResetPasswordPageAndGlobalStateType) => (
      <ResetPasswordScreen
        token={currState.resetToken}
        onResetPasswordSuccess={resetPasswordSuccess}
        onResetPasswordFailure={resetPasswordFailure}
        onTokenExpired={tokenExpired}
      />
    ),
    [SCREENS.RESET_PASSWORD_LOADING_SCREEN]: (currState: ResetPasswordPageAndGlobalStateType) => (
      <ResetPasswordLoadingScreen />
    ),
    [SCREENS.RESET_PASSWORD_ERROR_SCREEN]: (currState: ResetPasswordPageAndGlobalStateType) => (
      <ResetPasswordErrorScreen />
    ),
  };

  return <ResetPasswordPageWrapper>{screens[state.currScreen](state)}</ResetPasswordPageWrapper>;
};

ResetPasswordPage.screenDisplayPackages = [
  resetPasswordScreenScreenDisplayPackages,
  sendPasswordResetScreenScreenDisplayPackages,
  resetPasswordDialogScreensScreenDisplayPackages,
];

export default ResetPasswordPage;
