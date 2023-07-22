import React, { useEffect, useState } from 'react';

import { PageType } from 'pages/pageType';
import {
  HomePageWrapper,
  PageCard,
  PageRawInnerContentWrapper,
  PageWrapper,
} from 'pagesShared/styles/Wrappers';
import PageBackground from 'pagesShared/Background';
import { PulseLoader } from 'react-spinners';
import { useTheme } from 'styled-components';
import useCustomerQuery from 'graphql/generated/queries/customerQuery';
import useCustomerAccountQuery from 'graphql/generated/queries/customerAccountQuery';
import {
  Customer,
  CustomerAccountType,
  EPAdvanceStatus,
  Subscription,
} from 'graphql/generated/serverModel';
import CashIllustration from 'images/illustrations/cash.png';
import MoneyIllustration from 'images/illustrations/money.png';
import WalletIllustration from 'images/illustrations/wallet.png';
import RewardsIllustration from 'images/illustrations/rewards.png';
import ShieldIllustration from 'images/illustrations/shield.png';
import SurveyIllustration from 'images/illustrations/surveys.png';
import LoansIllustration from 'images/illustrations/loans.png';
import MegaphoneIllustration from 'images/illustrations/megaphone.png';
import DebtIllustration from 'images/illustrations/debt.png';
//@ts-ignore
import SemiCircleProgressBar from 'react-progressbar-semicircle';
import confettiAnimation from 'assets/lottieAnimationJsons/confetti.json';
import Lottie from 'react-lottie';
import CountUp from 'react-countup';

import {
  FormHeader,
  LargeText,
  MediumText,
  SectionHeader,
  SmallText,
  TinyText,
  XLargeText,
  XLargeTextRainbow,
  XXLargeText,
  XXLargeTextRainbow,
} from 'components/styling/Text';
import homePageScreenDisplayPackages from './screenDisplayPackages/homeScreen';
import Carousel from 'react-bootstrap/Carousel';
import LeafsIllustration from 'images/leafs.png';
import {
  HomeCard,
  HomeCardFooterRow,
  HomeCardRow,
  HomeCardTitleRow,
  EmailValidationCard,
  EmailValidationCardResolveButton,
  HomePageTopSection,
  HomePageWelcomeWrapper,
  ImageHolder,
  LinkSection,
  PaymentWarningCard,
  PaymentWarningCardResolveButton,
  Pill,
  PillWrapper,
  ReferAFriendCardInnerWrapper,
  RewardsPill,
} from './styles/HomePage';
import ForwardArrow from 'images/ForwardArrow';
import Illustration from 'images/illustrations/PlantsIllustration.png';
import {
  DEBT_MANAGEMENT_PAGE_ROUTE,
  DIGITAL_PROTECTION_PAGE_ROUTE,
  EARLY_PAYROLL_PAGE_ROUTE,
  FINANCIAL_WELLNESS_PAGE_ROUTE,
  PERSONAL_LOAN_PAGE_ROUTE,
  REFERRAL_PAGE_ROUTE,
  REWARDS_PAGE_ROUTE,
  ACCOUNT_PAGE_ROUTE,
  MEMBERSHIP_PAGE_ROUTE,
  CONTEST_PAGE_ROUTE,
  BUILD_PAGE_ROUTE,
} from 'Routes';
import { useHistory } from 'react-router';
import useScreenType from 'utils/windowSize/useScreenType';
import DotsLoader from 'components/display/DotsLoader';
import Spacer from 'components/position/Spacer';
import IncomeTrendGraph from 'pages/financialWellnessPage/IncomeTrendGraph';
import useCustomerFinancialReportQuery from 'graphql/generated/queries/customerFinancialReportQuery';
import { getUserContextFromAuthToken } from 'auth/userContext';
import ProgressBar from 'components/widget/progressBar/ProgressBar';
import useRewardsAccountQuery from 'graphql/generated/queries/rewardsAccountQuery';
import useInAppMessageQuery from 'graphql/generated/queries/inAppMessageQuery';
import useModal from 'components/container/modal/useModal';
import NybleLogo from 'images/NybleLogo';
import { ButtonText } from 'components/styling/Form';
import Button from 'components/input/button/Button';
import useAuthProcedures from 'auth/authProcedures';
import {
  ANNOUNCEMENT_MODAL,
  SUBSCRIPTION_NOTICE_MODAL,
} from 'components/container/modal/ModalRegistry';
import LoadingPage from 'pages/commonScreens/LoadingPage';

import VerifiedIllustration from 'images/illustrations/verified.png';
import PremiumIllustration from 'images/illustrations/premium.png';

import BuildIllustration from 'images/illustrations/build.png';

import NybleEmpty from 'images/nyble_empty_grey.png';
import trophyIllustration from 'images/illustrations/trophy.png';
import contestIllustration from 'images/illustrations/contest.png';
import { has_feature } from 'utils/features';

import sendValidateEmailLinkMutation from 'graphql/generated/mutations/sendValidateEmailLinkMutation';
import { useApolloClient } from '@apollo/client';
import { useToast } from 'components/widget/toast/Toast';

import useGlobalState from 'globalState/useGlobalState';
import { getAdvanceStatusString } from 'pages/earlyPayrollPage/screens/HomeScreen';

export type ApplicationFlowPagePropsType = {};

const HomePage = ({}: ApplicationFlowPagePropsType) => {
  const theme = useTheme();
  const history = useHistory();
  const { isMobile } = useScreenType();

  const [globalState, globalDispatch] = useGlobalState();
  const [openAnnouncementModal, closeAnnouncementModal] = useModal();
  const [announcementModalOpened, setannouncementModalOpened] = useState(false);

  const [openPaymentModal, closePaymentModal] = useModal();
  const [paymentModalOpened, setPaymentModalOpened] = useState(false);

  const authProcedurs = useAuthProcedures();
  const apolloClient = useApolloClient();
  const [openSuccessToast, openErrorToast] = useToast();

  const {
    data: announcementData,
    loading: announcementLoading,
    refetch: announcementRefetch,
  } = useInAppMessageQuery();

  if (
    !globalState ||
    globalState.subscriptionLoading ||
    globalState.customerLoading ||
    globalState.rewardAccountLoading ||
    announcementLoading
  ) {
    <LoadingPage />;
  }

  const subscription = globalState.subscription ? globalState.subscription : null;
  const rewardAccount = globalState.rewardAccount ? globalState.rewardAccount : null;
  const customer = globalState.customer;

  const isPremium = subscription && subscription.type === 'PROTECT_PLUS' ? true : false;

  const goToCreditLine = () => {
    history.push(EARLY_PAYROLL_PAGE_ROUTE);
  };

  const onClickGoToPersonalLoan = () => {
    history.push(PERSONAL_LOAN_PAGE_ROUTE);
  };

  const onClickGoToFinancialWellness = () => {
    history.push(FINANCIAL_WELLNESS_PAGE_ROUTE);
  };

  const onClickGoToPaySubscription = () => {
    history.push(MEMBERSHIP_PAGE_ROUTE);
  };

  const goToRewards = () => {
    history.push(REWARDS_PAGE_ROUTE);
  };

  const goToContest = () => {
    history.push(CONTEST_PAGE_ROUTE);
  };

  const goToBuild = () => {
    history.push(BUILD_PAGE_ROUTE);
  };

  const onClickGoToDigitalProtection = () => {
    history.push(DIGITAL_PROTECTION_PAGE_ROUTE);
  };

  const onClickGoToSurveys = () => {
    window.open(process.env.survey_junkie_link, '_blank');
  };

  const onClickGoToReferral = () => {
    history.push(REFERRAL_PAGE_ROUTE);
  };

  const onClickGoToDebtManagement = () => {
    history.push(DEBT_MANAGEMENT_PAGE_ROUTE);
  };

  const onClickGoToSettings = () => {
    history.push(ACCOUNT_PAGE_ROUTE);
  };

  const onLogout = () => {
    authProcedurs.logOut();
  };

  const onResolveClosePaymentModal = () => {
    closePaymentModal(SUBSCRIPTION_NOTICE_MODAL);
  };

  const onSubmitSendEmailValidation = () => {
    sendValidateEmailLinkMutation(apolloClient)
      .then((result) => {
        if (result && result.data.sendValidateEmailLink.success) {
          openSuccessToast(`A verification email has been sent to ${customer.email}`);
        } else if (result && result.data.sendValidateEmailLink.error) {
          openErrorToast(result.data.sendValidateEmailLink.error.detail);
        }
      })
      .catch((error) => {
        openErrorToast('There was an error sending verification email, please try again later');
      });
  };

  useEffect(() => {
    if (!announcementModalOpened && announcementData && announcementData.inAppMessage.success) {
      const message = announcementData.inAppMessage.data;
      if (message) {
        openAnnouncementModal(ANNOUNCEMENT_MODAL, {
          text: message.text,
          template_id: message.template_id,
          onRequestClose: () => {
            closeAnnouncementModal(ANNOUNCEMENT_MODAL);
          },
        });
        setannouncementModalOpened(true);
      }
    }
  }, [announcementData, announcementModalOpened]);

  useEffect(() => {
    if (!paymentModalOpened && subscription && subscription.status == 'OVERDUE') {
      openPaymentModal(SUBSCRIPTION_NOTICE_MODAL, {
        status: subscription.status,
        closeModal: onResolveClosePaymentModal,
      });
      setPaymentModalOpened(true);
    }
  }, [subscription, paymentModalOpened]);

  const pointsBalance = rewardAccount ? rewardAccount.star_balance : 0;
  const unlockedPercentage = globalState.epaAccount
    ? Math.floor(globalState.epaAccount.min_epa_limit / 150)
    : 0;

  const activeCreditLine = globalState.activeEPA;

  let progress = 0;
  let points_until_rewards = 11100;

  if (pointsBalance <= 11100) {
    progress = pointsBalance / 11100;
    points_until_rewards = 11100 - pointsBalance;
  } else if (pointsBalance <= 19100) {
    points_until_rewards = 19100 - pointsBalance;
    progress = pointsBalance / 19100;
  } else if (pointsBalance <= 28300) {
    points_until_rewards = 28300 - pointsBalance;
    progress = pointsBalance / 28300;
  } else if (pointsBalance <= 3100) {
    points_until_rewards = 3100 - pointsBalance;
    progress = pointsBalance / 3100;
  } else {
    points_until_rewards = 55700 - pointsBalance;
    progress = pointsBalance / 55700;
  }

  if (progress <= 0.9 && progress !== 0) {
    progress = progress * 1.3;
    progress = Math.min(progress, 0.9);
  } else if (progress === 0) {
    progress = Math.max(0.03, progress);
  }

  const get_credit_line_status_colors = (status: string): string[] => {
    switch (status) {
      case EPAdvanceStatus.COMPLETED:
      case EPAdvanceStatus.ADVANCE_DEPOSITED:
      case EPAdvanceStatus.ADVANCE_SENT:
        return [theme.colours.success, theme.colours.lightGreen];
      case EPAdvanceStatus.ADVANCE_FAILED:
        return [theme.colours.warning, theme.colours.lightYellow];
      case EPAdvanceStatus.REPAYMENT_FAILED:
        return [theme.colours.error, theme.newColours.pink];
      case EPAdvanceStatus.INITIAL:
        return [theme.colours.dark, theme.colours.lightYellow];

      default:
        return [theme.colours.dark, theme.colours.lightBlueGrey];
    }
  };

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: confettiAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <PageBackground>
      <HomePageWelcomeWrapper>
        <MediumText bold color={theme.colours.dark} marginBottom="12px">
          Welcome back, {customer && customer.firstName ? customer.firstName : ''}{' '}
        </MediumText>
        {globalState.subscription && globalState.subscription.status === 'ACTIVE' && !isPremium && (
          <TinyText black color={theme.colours.slate} marginBottom="16px">
            Verified & Active Member{' '}
            <img src={VerifiedIllustration} style={{ width: 15, height: 15 }} />
          </TinyText>
        )}
        {isPremium && (
          <>
            <TinyText black color={theme.colours.slate} marginBottom="16px">
              Annual Protect+ Member{' '}
              <img src={PremiumIllustration} style={{ width: 30, height: 30, marginTop: -10 }} />
            </TinyText>
          </>
        )}
      </HomePageWelcomeWrapper>

      {subscription && subscription.status === 'OVERDUE' && (
        <PaymentWarningCard>
          <MediumText black color={theme.newColours.white} textAlign="center" marginBottom="8px">
            Membership Overdue!
          </MediumText>
          <TinyText bold color={theme.newColours.white} textAlign="center" marginBottom="12px">
            Hey {customer && customer.firstName ? customer.firstName : ''}, it seems that your
            membership is past due. Please help us resolve this ASAP to continue using Nyble
            Services.
          </TinyText>
          <PaymentWarningCardResolveButton>
            <SmallText color={theme.newColours.white} black onClick={onClickGoToPaySubscription}>
              Resolve {'>'}
            </SmallText>
          </PaymentWarningCardResolveButton>
        </PaymentWarningCard>
      )}
      {subscription && subscription.status === 'PAYMENT_FAILED' && (
        <PaymentWarningCard background={theme.colours.warning}>
          <MediumText black color={theme.newColours.primary1} textAlign="center" marginBottom="8px">
            Membership payment failed
          </MediumText>
          <TinyText bold color={theme.newColours.primary1} textAlign="center" marginBottom="12px">
            Hey {customer && customer.firstName ? customer.firstName : ''}, it seems that your
            membership payment didn't go through. Please help us resolve this ASAP to continue using
            Nyble Services.
          </TinyText>
          <PaymentWarningCardResolveButton>
            <SmallText color={theme.newColours.primary1} black onClick={onClickGoToPaySubscription}>
              Resolve {'>'}
            </SmallText>
          </PaymentWarningCardResolveButton>
        </PaymentWarningCard>
      )}
      <Spacer height={12} />

      {customer && !customer.profile.email_validated ? (
        <>
          <EmailValidationCard>
            <TinyText bold textAlign="center">
              Hey {customer && customer.firstName ? customer.firstName : ''}, please verify your
              email {customer && customer.email}
            </TinyText>
            <EmailValidationCardResolveButton>
              <SmallText black onClick={onSubmitSendEmailValidation}>
                Verify {'>'}
              </SmallText>
            </EmailValidationCardResolveButton>
          </EmailValidationCard>
        </>
      ) : (
        <></>
      )}
      <Spacer height={5} />
      <HomeCard onClick={goToContest} background={theme.colours.darker}>
        <Lottie
          options={animationOptions}
          style={{ position: 'absolute' }}
          height={300}
          width={300}
        />
        <HomeCardTitleRow>
          <LargeText color={theme.colours.slate} black>
            Summer Contest
          </LargeText>

          <Pill bgColor={theme.colours.lightGreen}>
            <TinyText black color={theme.colours.success}>
              Ongoing
            </TinyText>
          </Pill>
        </HomeCardTitleRow>
        <TinyText marginBottom="12px" black color={theme.colours.white}>
          Limited time only
        </TinyText>
        <MediumText black color={theme.colours.white}>
          Win an iPhone 14, Apple Watch, Airpods & more!
        </MediumText>
        <img src={contestIllustration} style={{ width: 'auto', height: 180, marginBottom: 32 }} />
      </HomeCard>
      <HomeCard onClick={goToCreditLine}>
        <HomeCardTitleRow>
          <LargeText black>Interest-Free Cash</LargeText>
          <img
            src={CashIllustration}
            style={{ width: 70, height: 70, marginTop: -10, marginRight: -10 }}
          />
        </HomeCardTitleRow>
        <PillWrapper style={{ marginTop: -40 }}>
          {activeCreditLine ? (
            <Pill bgColor={get_credit_line_status_colors(activeCreditLine.status)[1]}>
              <SmallText black color={get_credit_line_status_colors(activeCreditLine.status)[0]}>
                {getAdvanceStatusString(activeCreditLine.status)}
              </SmallText>
            </Pill>
          ) : (
            <Pill
              bgColor={
                globalState.epaAccount ? theme.colours.lightGreen : theme.colours.lightBlueGrey
              }
            >
              <SmallText
                black
                color={globalState.epaAccount ? theme.colours.success : theme.colours.slate}
              >
                {globalState.epaAccount ? 'Available' : 'Apply Now'}
              </SmallText>
            </Pill>
          )}
        </PillWrapper>
        <SemiCircleProgressBar
          strokeWidth={25}
          percentage={unlockedPercentage}
          style={{ marginBottom: -80, bottom: -10 }}
          stroke={theme.colours.slate}
          diameter={330}
          background={theme.colours.blueGrey}
        />
        <div
          style={{
            marginTop: -80,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <XXLargeText color={theme.colours.slate} bold>
            <CountUp end={unlockedPercentage} duration={1.5} />%
          </XXLargeText>
          <MediumText bold marginBottom="8px">
            of $150 Unlocked
          </MediumText>
        </div>
      </HomeCard>

      <HomeCard background={theme.colours.dark} onClick={goToBuild}>
        <HomeCardTitleRow>
          <LargeText color={theme.colours.white} black>
            Credit Builder
          </LargeText>

          <Pill bgColor={theme.colours.lightGreen}>
            <TinyText black color={theme.colours.success}>
              Early Access
            </TinyText>
          </Pill>
        </HomeCardTitleRow>

        <img src={BuildIllustration} style={{ width: 100, height: 100 }} />

        <SmallText bold color={theme.colours.white} marginBottom="12px">
          Build credit history, access your credit score and monitor your credit file with Nyble.
        </SmallText>
      </HomeCard>

      <HomeCard background={theme.colours.slate} onClick={goToRewards}>
        <HomeCardTitleRow>
          <LargeText color={theme.colours.white} black>
            Rewards Account
          </LargeText>
          <img
            src={RewardsIllustration}
            style={{ width: 65, height: 65, marginTop: -10, marginRight: -10 }}
          />
        </HomeCardTitleRow>

        <XXLargeText textAlign="center" color={theme.colours.white} style={{ marginTop: -30 }} bold>
          <CountUp end={pointsBalance} duration={2.5} separator="," />
        </XXLargeText>

        <SmallText bold color={theme.colours.white} marginBottom="12px">
          Your Reward Points Balance
        </SmallText>

        <ProgressBar
          value={progress}
          color={theme.colours.blueGrey}
          background={theme.colours.black}
          maxWidth="200px"
          height="10px"
        />

        <TinyText bold color={theme.colours.white} alignSelf="center" marginBottom="8px">
          {points_until_rewards.toLocaleString()} points until next reward
        </TinyText>
        <Spacer height={14} />
      </HomeCard>

      <HomeCardRow>
        <HomeCard width="48%" minHeight="300px" onClick={onClickGoToPersonalLoan}>
          <HomeCardTitleRow>
            <MediumText black>Loans & More</MediumText>
          </HomeCardTitleRow>
          <SmallText alignSelf="left" textAlign="left">
            Get a personal loan, auto-loan, and much more with our partner network.
          </SmallText>
        </HomeCard>
        <Spacer width={10} />
        <HomeCard onClick={onClickGoToDebtManagement} width="48%" minHeight="300px">
          <HomeCardTitleRow>
            <MediumText black>Reduce Debt</MediumText>
          </HomeCardTitleRow>

          <SmallText alignSelf="left" textAlign="left">
            Reduce your debt payment by ~30-50%.
          </SmallText>
          <Spacer height={75} />
        </HomeCard>
      </HomeCardRow>

      <HomeCard background={theme.colours.lightBlueGrey} onClick={onClickGoToSurveys}>
        <HomeCardTitleRow>
          <LargeText black>Take Surveys, Get Paid </LargeText>
        </HomeCardTitleRow>
        <img src={SurveyIllustration} style={{ width: 70, height: 70 }} />
        <SmallText alignSelf="left" textAlign="left">
          Earn $40+ per month by taking ~3 surveys / day
        </SmallText>
        <Spacer height={20} />
      </HomeCard>

      <HomeCard background={theme.colours.black} onClick={onClickGoToReferral}>
        <HomeCardTitleRow>
          <LargeText color="white" black>
            Refer Friends, Get Approved For More!
          </LargeText>
        </HomeCardTitleRow>
        <img src={MegaphoneIllustration} style={{ width: 70, height: 70 }} />
        <SmallText color="white" alignSelf="left" textAlign="left">
          Refer a friend, and earn +5$ approval and 200 points for each referral. Terms & conditions
          apply.
        </SmallText>
        <Spacer height={20} />
      </HomeCard>

      <Spacer height={32} />

      <MediumText black marginBottom="48px" onClick={onClickGoToSettings}>
        Manage your account {'>'}
      </MediumText>

      <img
        src={NybleEmpty}
        style={{ alignSelf: 'center', width: 50, height: 50, marginBottom: 12 }}
      />
      <TinyText
        alignSelf="center"
        black
        color={theme.colours.darkBlueGrey}
        textAlign="center"
        maxWidth="300px"
      >
        All Rights Reserved - Nyble
      </TinyText>
      <Spacer height={100} />
    </PageBackground>
  );
};

HomePage.screenDisplayPackages = [homePageScreenDisplayPackages];

export default HomePage;
