import { LOGOUT_MODAL } from 'components/container/modal/ModalRegistry';
import useModal from 'components/container/modal/useModal';
import Button from 'components/input/button/Button';
import Spacer from 'components/position/Spacer';
import { LargeText, MediumText, SmallText } from 'components/styling/Text';
import useCustomerQuery from 'graphql/generated/queries/customerQuery';
import NybleLogo from 'images/NybleLogo';
import { Pill } from 'pages/homePage/styles/HomePage';
import React from 'react';

import { ArrowRight, ChevronsRight, LogOut, Menu, Sliders, User, Users } from 'react-feather';
import { useHistory } from 'react-router-dom';
import {
  CUSTOMER_SUPPORT_PAGE_ROUTE,
  EARLY_PAYROLL_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  isOnEarlyPayrollPageRoute,
  isOnPersonalLoanPageRoute,
  isOnHomePageRoute,
  PERSONAL_LOAN_PAGE_ROUTE,
  ACCOUNT_PAGE_ROUTE,
  isOnDigitalProtectionPageRoute,
  DIGITAL_PROTECTION_PAGE_ROUTE,
  isOnDebtManagementPage,
  DEBT_MANAGEMENT_PAGE_ROUTE,
} from 'Routes';
import { useTheme } from 'styled-components';
import { useWindowSize } from 'utils/windowSize/useWindowSize';
import {
  LowerNavSection,
  MenuSection,
  MobileNavbarSidebarWrapper,
  NavLinkWrapper,
  NavOptionWrapper,
  ProfileSection,
  UpperSectionWrapper,
  UserIconWrapper,
} from './styles/MobileNavbarSidebar';

export type SidebarPropsType = {
  isOpen: boolean;
  background?: string;
  onClose: () => void;
};

const MobileNavbarSidebar = ({ isOpen, background, onClose }: SidebarPropsType) => {
  const theme = useTheme();
  const history = useHistory();
  const [width, height] = useWindowSize();
  const [openModal] = useModal();

  const handleGoToHomePage = () => {
    onClose();
    history.push(HOME_PAGE_ROUTE);
  };

  const handleGoToEarlyPayroll = () => {
    onClose();
    history.push(EARLY_PAYROLL_PAGE_ROUTE);
  };

  const handleGoToPersonalLoan = () => {
    onClose();
    history.push(PERSONAL_LOAN_PAGE_ROUTE);
  };

  const handleGoToDigitalProtection = () => {
    onClose();
    history.push(DIGITAL_PROTECTION_PAGE_ROUTE);
  };

  const handleOpenCustomerSupport = () => {
    onClose();
    history.push(CUSTOMER_SUPPORT_PAGE_ROUTE);
  };

  const handleOpenSettings = () => {
    onClose();
    history.push(ACCOUNT_PAGE_ROUTE);
  };

  const handleGoToDebtManagement = () => {
    onClose();
    history.push(DEBT_MANAGEMENT_PAGE_ROUTE);
  };

  const handleLogOut = () => {
    openModal(LOGOUT_MODAL);
  };

  return (
    <MobileNavbarSidebarWrapper isOpen={isOpen} height={height}>
      <UpperSectionWrapper>
        <MenuSection onClick={onClose}>
          <ChevronsRight color="white" width={25} height={25} />
          <MediumText color="white" bold>
            {' '}
            Close Menu
          </MediumText>
        </MenuSection>
        <ProfileSection>
          <Spacer height={32} />
          <NybleLogo invertedColors height={25} width={80} />
          <Spacer height={32} />
        </ProfileSection>

        <NavLinkWrapper onClick={handleGoToHomePage} selected={isOnHomePageRoute(history.location)}>
          <MediumText
            bold
            color={isOnHomePageRoute(history.location) ? 'white' : theme.newColours.blue2}
          >
            Home
          </MediumText>
        </NavLinkWrapper>
        <NavLinkWrapper
          onClick={handleGoToEarlyPayroll}
          selected={isOnEarlyPayrollPageRoute(history.location)}
        >
          <MediumText
            bold
            color={isOnEarlyPayrollPageRoute(history.location) ? 'white' : theme.newColours.blue2}
          >
            Cash Advance
          </MediumText>
        </NavLinkWrapper>
        <NavLinkWrapper
          onClick={handleGoToPersonalLoan}
          selected={isOnPersonalLoanPageRoute(history.location)}
        >
          <MediumText
            bold
            color={isOnPersonalLoanPageRoute(history.location) ? 'white' : theme.newColours.blue2}
          >
            Personal Loan
          </MediumText>
        </NavLinkWrapper>
        <NavLinkWrapper
          onClick={handleGoToDebtManagement}
          selected={isOnDebtManagementPage(history.location)}
        >
          <MediumText
            bold
            color={isOnDebtManagementPage(history.location) ? 'white' : theme.newColours.blue2}
          >
            Debt Relief{' '}
          </MediumText>
          <Pill bgColor={theme.colours.error} style={{ marginLeft: 10 }}>
            <SmallText color="white" bold>
              New!
            </SmallText>
          </Pill>
        </NavLinkWrapper>
        <NavLinkWrapper
          onClick={handleGoToDigitalProtection}
          selected={isOnDigitalProtectionPageRoute(history.location)}
        >
          <MediumText
            bold
            color={
              isOnDigitalProtectionPageRoute(history.location) ? 'white' : theme.newColours.blue2
            }
          >
            Identity Coverage
          </MediumText>
        </NavLinkWrapper>
      </UpperSectionWrapper>
      <LowerNavSection>
        <NavOptionWrapper onClick={handleOpenSettings}>
          <img
            style={{
              borderRadius: 30,
              height: 30,
              width: 30,
              alignContent: 'center',
              alignItems: 'center',
            }}
            src={'https://cdn-icons-png.flaticon.com/512/3940/3940403.png'}
          />
          <Spacer width={12} />
          <LargeText color={theme.newColours.white} paddingTop="3px" bold>
            My Account
          </LargeText>
        </NavOptionWrapper>
      </LowerNavSection>
    </MobileNavbarSidebarWrapper>
  );
};

export default MobileNavbarSidebar;
