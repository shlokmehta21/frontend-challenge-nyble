import { ScreenDisplayPackage } from 'pages/screenDisplayPackageType';
import { SCREENS } from '../resetPasswordPageState';

const ResetPasswordLoadingScreenDisplayPackage: ScreenDisplayPackage<any> = {
  route: '/allScreens/resetPasswordPage_loading',
  pageState: { currScreen: SCREENS.RESET_PASSWORD_LOADING_SCREEN },
};

const ResetPasswordErrorScreenDisplayPackage: ScreenDisplayPackage<any> = {
  route: '/allScreens/resetPasswordPage_error',
  pageState: { currScreen: SCREENS.RESET_PASSWORD_ERROR_SCREEN },
};

const resetPasswordDialogScreensScreenDisplayPackages = [
  ResetPasswordLoadingScreenDisplayPackage,
  ResetPasswordErrorScreenDisplayPackage,
];

export default resetPasswordDialogScreensScreenDisplayPackages;
