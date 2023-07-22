import Button from 'components/input/button/Button';
import Spacer from 'components/position/Spacer';
import {
  ButtonText,
  LargeText,
  MediumText,
  SmallText,
  TinyText,
  XXLargeText,
} from 'components/styling/Text';
import useRewardsAccountQuery from 'graphql/generated/queries/rewardsAccountQuery';
import useSubscriptionQuery from 'graphql/generated/queries/subscriptionQuery';
import PageBackground from 'pagesShared/Background';
import ScreenForm from 'pagesShared/ScreenForm';
import React from 'react';

import rewardsIllustration from 'images/illustrations/rewards.png';

import { useTheme } from 'styled-components';
import { InfoSection, RedemptionSection, RedemptionSelectionRow } from '../styles/RewardsPage';
import CountUp from 'react-countup';
import WithCheckmark from 'components/display/WithCheckmark';
import { useHistory } from 'react-router';
import { HOME_PAGE_ROUTE } from 'Routes';
import LoadingPage from 'pages/commonScreens/LoadingPage';
import SelectionBox from 'components/input/selectionBox/SelectionBox';
import { handleInputChange } from 'react-select/dist/declarations/src/utils';

export type MainScreenPropsType = {
  onGoToRedeemPoints?: () => void;
};

const MainScreen = ({ onGoToRedeemPoints }: MainScreenPropsType) => {
  const theme = useTheme();
  const history = useHistory();

  const {
    data: rawSubscriptionData,
    refetch: refetchSubscriptionData,
    loading: subscriptionDataLoading,
  } = useSubscriptionQuery();

  const {
    data: rawRewardsAccountData,
    loading: rewardsAccountLoading,
    refetch: rewardsAccountRefetch,
  } = useRewardsAccountQuery();

  const onGoToRewards = () => {
    window.open('https://nyble.com/redemption', '_blank');
  };

  const onPressRefresh = () => {
    refetchSubscriptionData();
  };

  const onBack = () => {
    history.push(HOME_PAGE_ROUTE);
  };

  if (subscriptionDataLoading || rewardsAccountLoading) {
    return <LoadingPage />;
  }

  const subscriptionData = rawSubscriptionData.subscription.success
    ? rawSubscriptionData.subscription.data
    : null;

  const rewardsAccount = rawRewardsAccountData.rewardsAccount.success
    ? rawRewardsAccountData.rewardsAccount.data
    : null;

  if (!subscriptionData || !subscriptionData.active) {
    return (
      <PageBackground>
        <ScreenForm>
          <MediumText alignSelf="center" textAlign="center">
            Your rewards can only be accessed with an active membership plan.
          </MediumText>
          <Spacer height={32} />
          <Button onClick={onPressRefresh}>
            <ButtonText>Refresh</ButtonText>
          </Button>
        </ScreenForm>
      </PageBackground>
    );
  }

  const points_balance = rewardsAccount ? rewardsAccount.star_balance : 0;

  return (
    <PageBackground>
      <ScreenForm noTopPadding>
        <LargeText black textAlign="center" maxWidth="300px" alignSelf="center" marginBottom="24px">
          Redeem your points for rewards
        </LargeText>
        {/* <PointSection> */}
        <SmallText bold>Your points balance</SmallText>
        <XXLargeText bold color={theme.colours.slate}>
          <CountUp start={0} end={points_balance} duration={2} separator="," />
        </XXLargeText>
        {/* </PointSection> */}
        <img src={rewardsIllustration} style={{ width: 150, height: 150, marginBottom: 32 }} />

        <InfoSection>
          <WithCheckmark color={theme.colours.slate}>
            <SmallText maxWidth="300px">
              Earn a base <SmallText bold>100 points </SmallText> every time you repay your credit
              line
            </SmallText>
          </WithCheckmark>
          <WithCheckmark color={theme.colours.slate}>
            <SmallText maxWidth="300px">
              Earn additional <SmallText bold>100 points</SmallText> per dollar spent in fees & tip.
            </SmallText>
          </WithCheckmark>
          <WithCheckmark color={theme.colours.slate}>
            <SmallText maxWidth="300px">
              Earn a <SmallText bold>bonus 300 points</SmallText> for every early repayment
            </SmallText>
          </WithCheckmark>
        </InfoSection>
        {points_balance >= 11100 ? (
          <Button onClick={onGoToRedeemPoints}>
            <ButtonText bold>Redeem my points</ButtonText>
          </Button>
        ) : (
          <>
            <TinyText textAlign="center" black color={theme.colours.error}>
              Your points balance is currently insufficient for rewards redemption.
            </TinyText>
            <RedemptionSelectionRow>
              <RedemptionSection>
                <SelectionBox
                  selected={false}
                  width="100px"
                  height="55px"
                  vertical={true}
                  marginBottom="8px"
                  contentPadding="10px 5px 8px 5px"
                  background={theme.colours.white}
                  borderColor={theme.colours.lightBlueGrey}
                  disabled={true}
                >
                  <MediumText black color={theme.colours.darkBlueGrey}>
                    {'+10$'}
                  </MediumText>
                </SelectionBox>
                <SmallText bold textAlign="center" color={theme.colours.darkBlueGrey}>
                  11,100 Points
                </SmallText>
              </RedemptionSection>
              <RedemptionSection>
                <SelectionBox
                  selected={false}
                  width="100px"
                  height="55px"
                  vertical={true}
                  marginBottom="8px"
                  contentPadding="10px 5px 8px 5px"
                  background={theme.colours.white}
                  borderColor={theme.colours.lightBlueGrey}
                  disabled={true}
                >
                  <MediumText black color={theme.colours.darkBlueGrey}>
                    {'+20$'}
                  </MediumText>
                </SelectionBox>
                <SmallText bold color={theme.colours.darkBlueGrey}>
                  19,100 Points
                </SmallText>
              </RedemptionSection>
              <RedemptionSection>
                <SelectionBox
                  selected={false}
                  width="100px"
                  height="55px"
                  vertical={true}
                  marginBottom="8px"
                  contentPadding="10px 5px 8px 5px"
                  background={theme.colours.white}
                  borderColor={theme.colours.lightBlueGrey}
                  disabled={true}
                >
                  <MediumText black color={theme.colours.darkBlueGrey}>
                    {'+30$'}
                  </MediumText>
                </SelectionBox>
                <SmallText bold color={theme.colours.darkBlueGrey}>
                  28,300 Points
                </SmallText>
              </RedemptionSection>
            </RedemptionSelectionRow>
          </>
        )}
        <Spacer height={32} />
      </ScreenForm>
    </PageBackground>
  );
};

export default MainScreen;
