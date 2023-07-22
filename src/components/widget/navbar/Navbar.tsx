import React, { FC, useState } from 'react';
import {
  NavbarWrapper,
  NavbarContent,
  NavbarImage,
  TabSection,
  LoginButtonWrapper,
  UnderlineableText,
  MenuItemWrapper,
  MenuItemText,
  ApplyButton,
  ApplyButtonText,
  LogoAndPossiblyStoreNameWrapper,
  NavSection,
  NavLinkWrapper,
} from './styles/Navbar';
import Link, { LogoLink } from 'components/input/Link';
import { History } from 'history';
import {
  CUSTOMER_SUPPORT_PAGE_ROUTE,
  EARLY_PAYROLL_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  isOnEarlyPayrollPageRoute,
  ACCOUNT_PAGE_ROUTE,
} from 'Routes';
import { useAuthState } from 'auth/basicAuth';
import useModal from 'components/container/modal/useModal';
import {
  HOW_IT_WORKS_MODAL,
  LOGIN_MODAL,
  LOGOUT_MODAL,
} from 'components/container/modal/ModalRegistry';
import PersonIcon from 'images/PersonIcon';
import SettingsGear from 'images/SettingsGear';
import ContactBook from 'images/ContactBook';
import LogoutIcon from 'images/LogoutIcon';
import DropdownContainer from 'components/container/dropdown/DropdownContainer';
import DropdownBody from 'components/container/dropdown/DropdownBody';
import DropdownItem from 'components/container/dropdown/DropdownItem';
import HoverParent from 'components/container/hover/HoverParent';
import DropdownDivider from 'components/container/dropdown/DropdownDivider';
import { useTheme } from 'styled-components';
import HelpIcon from 'images/HelpIcon';
import LoginIcon from 'images/LoginIcon';
import Spacer from 'components/position/Spacer';
import { useWindowSize } from 'utils/windowSize/useWindowSize';
import { getForCurrentScreenSize } from 'GlobalTheme';
import { useRouteMatch } from 'react-router-dom';

import { FormBody, FormBodyBold, FormHeader } from 'components/styling/Form';
import { PageSectionSubheader, PageSectionText } from 'components/styling/Page';
import NybleLogo from 'images/NybleLogo';
import { MediumText } from 'components/styling/Text';
import { Home, User } from 'react-feather';

type NavbarPropsTyps = {
  history: History;
};

const Navbar: FC<NavbarPropsTyps> = ({ history }: NavbarPropsTyps) => {
  const [isLoggedIn] = useAuthState();
  const [openModal] = useModal();
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [width] = useWindowSize();
  const theme = useTheme();

  const loginOrOut = () => {
    if (isLoggedIn) {
      openModal(LOGOUT_MODAL);
    } else {
      openModal(LOGIN_MODAL);
    }
  };

  const handleOpenHowItWorks = () => {
    openModal(HOW_IT_WORKS_MODAL);
  };

  const handleOpenSettings = () => {
    history.push(ACCOUNT_PAGE_ROUTE);
  };

  const handleOpenCustomerSupport = () => {
    history.push(CUSTOMER_SUPPORT_PAGE_ROUTE);
  };

  const profileDropdownBody = (
    <DropdownBody width="200px" onClick={() => setIsProfileDropdownOpen(false)}>
      {isLoggedIn && (
        <DropdownItem onClick={handleOpenSettings}>
          <HoverParent>
            {(isHovered) => (
              <MenuItemWrapper>
                <MenuItemText parentHovered={isHovered}>Settings</MenuItemText>
                <SettingsGear
                  width={24}
                  height={24}
                  stroke={isHovered ? theme.colours.primary : theme.colours.grey}
                />
              </MenuItemWrapper>
            )}
          </HoverParent>
        </DropdownItem>
      )}
      <DropdownItem onClick={handleOpenCustomerSupport}>
        <HoverParent>
          {(isHovered) => (
            <MenuItemWrapper>
              <MenuItemText parentHovered={isHovered}>Contact Us</MenuItemText>
              <ContactBook
                width={24}
                height={24}
                stroke={isHovered ? theme.colours.primary : theme.colours.grey}
              />
            </MenuItemWrapper>
          )}
        </HoverParent>
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem onClick={loginOrOut}>
        <HoverParent>
          {(isHovered) => (
            <MenuItemWrapper>
              <MenuItemText parentHovered={isHovered}>
                {isLoggedIn ? 'Logout' : 'Login'}
              </MenuItemText>
              {isLoggedIn && (
                <LogoutIcon
                  width={24}
                  height={24}
                  stroke={isHovered ? theme.colours.primary : theme.colours.grey}
                />
              )}
              {!isLoggedIn && (
                <LoginIcon
                  width={24}
                  height={24}
                  stroke={isHovered ? theme.colours.primary : theme.colours.grey}
                />
              )}
            </MenuItemWrapper>
          )}
        </HoverParent>
      </DropdownItem>
    </DropdownBody>
  );

  return (
    <NavbarWrapper>
      <NavbarContent>
        <LogoAndPossiblyStoreNameWrapper>
          {width < theme.breakpoints.tablet ? (
            <NybleLogo
              height={getForCurrentScreenSize(theme.sizing.navbar, width).iconHeight}
              width={100}
            />
          ) : (
            <LogoLink href="https://nyble.com/">
              <NybleLogo
                height={getForCurrentScreenSize(theme.sizing.navbar, width).iconHeight}
                width={100}
              />
            </LogoLink>
          )}
        </LogoAndPossiblyStoreNameWrapper>
        <TabSection>
          <Link onClick={() => history.push(HOME_PAGE_ROUTE)}>
            <Home size={32} strokeWidth={1} stroke={theme.newColours.black} />
          </Link>
          <Spacer width={16} />
          <DropdownContainer
            isOpen={isProfileDropdownOpen}
            handleClose={() => setIsProfileDropdownOpen(false)}
            body={profileDropdownBody}
          >
            <Link onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}>
              <User size={32} strokeWidth={1} stroke={theme.newColours.black} />
            </Link>
          </DropdownContainer>
          <Link>
            <LoginButtonWrapper>
              <UnderlineableText></UnderlineableText>
            </LoginButtonWrapper>
          </Link>
        </TabSection>
      </NavbarContent>
    </NavbarWrapper>
  );
};

export default Navbar;
