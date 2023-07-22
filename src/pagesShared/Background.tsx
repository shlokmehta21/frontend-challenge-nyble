import React, { useState } from 'react';
import {
  LowerPortion,
  PageBackgroundInnerWrapper,
  PageBackgroundWrapper,
  UpperPortion,
} from './styles/Background';
import useScreenType from 'utils/windowSize/useScreenType';
import { useHistory } from 'react-router';
import MobileNavbar from 'components/widget/navbar/MobileNavbar';
import Navbar from 'components/widget/navbar/Navbar';
import Spacer from 'components/position/Spacer';
import MobileNavbarSidebar from 'components/widget/navbar/MobileNavbarSidebar';
import { PageWrapper } from './styles/Wrappers';
import { useAuthState } from 'auth/basicAuth';
import FooterNavbar from 'components/widget/navbar/FooterNavbar';

export type PageBackgroundPropsType = {
  children: any;
  noFooter?: boolean;
};

/* Standard page background */
const PageBackground = ({ noFooter, children }: PageBackgroundPropsType) => {
  const isMobile = useScreenType();
  const history = useHistory();
  const [isLoggedIn] = useAuthState();
  const [isSidebarOpen, setIsSidebarOpen] = useState(0);

  return (
    <PageBackgroundWrapper>
      <PageWrapper>
        <Spacer height={60} />
        {children}
        <Spacer height={60} />
      </PageWrapper>

      <MobileNavbar />

      {isLoggedIn && !noFooter && <FooterNavbar />}
    </PageBackgroundWrapper>
  );
};

export default PageBackground;
