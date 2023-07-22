import React, { useEffect, useState } from 'react';
import {
  MobileNavbarWrapper,
  NavbarContent,
  TabSection,
  FooterWrapper,
  FooterContentWrapper,
  FooterTabSection,
} from './styles/MobileNavbar';
import { useAuthState } from 'auth/basicAuth';
import { useTheme } from 'styled-components';
import { useWindowSize } from 'utils/windowSize/useWindowSize';
import { getForCurrentScreenSize } from 'GlobalTheme';
import NybleLogo from 'images/NybleLogo';
import { BarChart, Gift, Home, Menu, User, Zap } from 'react-feather';
import MobileNavbarSidebar from './MobileNavbarSidebar';
import useModal from 'components/container/modal/useModal';
import { LOGIN_MODAL } from 'components/container/modal/ModalRegistry';
import { PageSectionSubheader } from 'components/styling/Page';
import RewardsBalancePill from 'components/widget/rewards/RewardsBalancePill';
import { getUserContextFromAuthToken } from 'auth/userContext';
import Spacer from 'components/position/Spacer';
import { LargeText, SmallText } from 'components/styling/Text';
import EmptyLogo from 'images/nyble_empty_black.png';
import { useHistory } from 'react-router';
import {
  ACCOUNT_PAGE_ROUTE,
  BUILD_PAGE_ROUTE,
  EARLY_PAYROLL_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  REWARDS_PAGE_ROUTE,
  isOnAccountPage,
  isOnBuildPage,
  isOnEarlyPayrollPageRoute,
  isOnHomePageRoute,
  isOnRewardsPage,
} from 'Routes';
import { hi } from 'date-fns/locale';

type FooterNavbarPropsType = {};

const FooterNavbar = ({}: FooterNavbarPropsType) => {
  const [isLoggedIn] = useAuthState();

  const [width] = useWindowSize();
  const [openModal] = useModal();
  const theme = useTheme();
  const history = useHistory();

  const onGoHomePage = () => {
    history.push(HOME_PAGE_ROUTE);
  };

  const onGoCoverPage = () => {
    history.push(EARLY_PAYROLL_PAGE_ROUTE);
  };

  const onGoBuildPage = () => {
    history.push(BUILD_PAGE_ROUTE);
  };

  const onGoRewardsPage = () => {
    history.push(REWARDS_PAGE_ROUTE);
  };

  const onGoAccountPage = () => {
    history.push(ACCOUNT_PAGE_ROUTE);
  };

  return (
    <FooterWrapper>
      <FooterContentWrapper>
        <FooterTabSection onClick={onGoCoverPage}>
          <Zap
            height={25}
            width={25}
            color={
              isOnEarlyPayrollPageRoute(history.location) ? theme.colours.slate : theme.colours.dark
            }
          />
          <SmallText
            color={
              isOnEarlyPayrollPageRoute(history.location) ? theme.colours.slate : theme.colours.dark
            }
            black
          >
            Cash
          </SmallText>
        </FooterTabSection>
        <FooterTabSection onClick={onGoBuildPage}>
          <BarChart
            height={25}
            width={25}
            color={isOnBuildPage(history.location) ? theme.colours.slate : theme.colours.dark}
          />
          <SmallText
            color={isOnBuildPage(history.location) ? theme.colours.slate : theme.colours.dark}
            black
          >
            Build
          </SmallText>
        </FooterTabSection>
        <FooterTabSection onClick={onGoHomePage}>
          <Home
            height={25}
            width={25}
            color={isOnHomePageRoute(history.location) ? theme.colours.slate : theme.colours.dark}
          />
          <SmallText
            color={isOnHomePageRoute(history.location) ? theme.colours.slate : theme.colours.dark}
            black
          >
            Home
          </SmallText>
        </FooterTabSection>
        <FooterTabSection onClick={onGoRewardsPage}>
          <Gift
            height={25}
            width={25}
            color={isOnRewardsPage(history.location) ? theme.colours.slate : theme.colours.dark}
          />
          <SmallText
            color={isOnRewardsPage(history.location) ? theme.colours.slate : theme.colours.dark}
            black
          >
            Rewards
          </SmallText>
        </FooterTabSection>
        <FooterTabSection onClick={onGoAccountPage}>
          <User
            height={25}
            width={25}
            color={isOnAccountPage(history.location) ? theme.colours.slate : theme.colours.dark}
          />
          <SmallText
            color={isOnAccountPage(history.location) ? theme.colours.slate : theme.colours.dark}
            black
          >
            Account
          </SmallText>
        </FooterTabSection>
      </FooterContentWrapper>
    </FooterWrapper>
  );
};

export default FooterNavbar;
