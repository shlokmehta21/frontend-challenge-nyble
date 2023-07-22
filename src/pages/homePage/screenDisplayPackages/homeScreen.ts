import { UserType } from 'auth/userContext';
import { ScreenDisplayPackage } from 'pages/screenDisplayPackageType';

const HomePageDisplayPackage: ScreenDisplayPackage<any> = {
  route: '/allScreens/homePage_main',
  pageState: {},
  credentials: UserType.CUSTOMER,
};

const homePageScreenDisplayPackages = [HomePageDisplayPackage];

export default homePageScreenDisplayPackages;
