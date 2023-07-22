import React, { useEffect, useState } from 'react';
import { MobileNavbarWrapper, NavbarContent, TabSection } from './styles/MobileNavbar';
import { useAuthState } from 'auth/basicAuth';
import { useTheme } from 'styled-components';
import { useWindowSize } from 'utils/windowSize/useWindowSize';
import { getForCurrentScreenSize } from 'GlobalTheme';
import NybleLogo from 'images/NybleLogo';
import { Home, Menu, MessageCircle } from 'react-feather';
import MobileNavbarSidebar from './MobileNavbarSidebar';
import useModal from 'components/container/modal/useModal';
import { LOGIN_MODAL } from 'components/container/modal/ModalRegistry';
import { PageSectionSubheader } from 'components/styling/Page';
import RewardsBalancePill from 'components/widget/rewards/RewardsBalancePill';
import { getUserContextFromAuthToken } from 'auth/userContext';
import Spacer from 'components/position/Spacer';
import { LargeText, MediumText, SmallText } from 'components/styling/Text';
import EmptyLogo from 'images/nyble_empty_black.png';
import { useHistory } from 'react-router';
import { HOME_PAGE_ROUTE } from 'Routes';
import { Crisp } from 'crisp-sdk-web';
type MobileNavbarPropsType = {};

const MobileNavbar = ({}: MobileNavbarPropsType) => {
  const [isLoggedIn] = useAuthState();
  const [width] = useWindowSize();
  const [openModal] = useModal();
  const theme = useTheme();
  const history = useHistory();

  useEffect(() => {
    if (isLoggedIn) {
      const userContext = getUserContextFromAuthToken();
      window.analytics.identify(userContext.id, {
        email: userContext.email,
        phone: userContext.phoneNumber,
      });
    }
  }, [isLoggedIn]);

  const onGoHomePage = () => {
    history.push(HOME_PAGE_ROUTE);
  };

  Crisp.chat.onChatClose(() => {
    Crisp.chat.hide();
  });

  return (
    <MobileNavbarWrapper>
      <NavbarContent>
        <TabSection alignItems="left">{isLoggedIn && <RewardsBalancePill />}</TabSection>
        <TabSection alignItems="center" onClick={onGoHomePage}>
          <img
            src={EmptyLogo}
            style={{
              height: 24,
              width: 70,
            }}
          />
        </TabSection>
        <TabSection
          onClick={() => {
            Crisp.chat.show();
            Crisp.chat.open();
          }}
          alignItems="flex-end"
        >
          <SmallText bold>Help</SmallText>
          <Spacer width={5} />
          <MessageCircle color={theme.newColours.primary1} height={20} width={20} />
        </TabSection>
      </NavbarContent>
    </MobileNavbarWrapper>
  );
};

export default MobileNavbar;
