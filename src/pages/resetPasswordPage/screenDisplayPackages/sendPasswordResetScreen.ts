import { ScreenDisplayPackage } from 'pages/screenDisplayPackageType';
import { SCREENS } from '../resetPasswordPageState';

const SendPasswordResetScreenDisplayPackage: ScreenDisplayPackage<any> = {
  route: '/allScreens/resetPasswordPage_sendResetPassword',
  pageState: { currScreen: SCREENS.SEND_PASSWORD_RESET_SCREEN },
};

const sendPasswordResetScreenScreenDisplayPackages = [SendPasswordResetScreenDisplayPackage];

export default sendPasswordResetScreenScreenDisplayPackages;
