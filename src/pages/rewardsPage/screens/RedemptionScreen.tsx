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
import PageBackground from 'pagesShared/Background';
import ScreenForm from 'pagesShared/ScreenForm';
import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { RedemptionSection, RedemptionSelectionRow } from '../styles/RewardsPage';
import CountUp from 'react-countup';
import { useHistory } from 'react-router';
import { HOME_PAGE_ROUTE } from 'Routes';
import LoadingPage from 'pages/commonScreens/LoadingPage';
import useGlobalState from 'globalState/useGlobalState';
import SelectionBox from 'components/input/selectionBox/SelectionBox';

import sendRedeemPointsMutation from 'graphql/generated/mutations/redeemPointsMutation';
import { useApolloClient } from '@apollo/client';
import { useToast } from 'components/widget/toast/Toast';
import { ACTIONS } from 'globalState/GlobalStateProvider';
import throw_error from 'utils/throw_error';

export type RedemptionScreenPropsType = {
  onRedeemPoints: () => void;
};

const RedemptionScreen = ({ onRedeemPoints }: RedemptionScreenPropsType) => {
  const theme = useTheme();
  const history = useHistory();
  const [globalState, globalDispatch] = useGlobalState();
  const [selectedApproval, setSelectedApproval] = useState(null);
  const apolloClient = useApolloClient();
  const [openSuccessToast, openErrorToast] = useToast();

  const onBack = () => {
    history.push(HOME_PAGE_ROUTE);
  };

  const handleClickApprovalAmount = (amount: number) => {
    setSelectedApproval(amount);
  };

  const handleRedeemPoints = () => {
    sendRedeemPointsMutation(apolloClient, {
      increase_amount: selectedApproval,
    })
      .then((result) => {
        if (result.data && result.data.redeemPoints.success) {
          openSuccessToast('Points Redeemed Successfully');
          globalDispatch({ type: ACTIONS.REFETCH_REWARD_ACCOUNT });
          onRedeemPoints();
        } else if (result && result.data.redeemPoints.error) {
          openErrorToast(result.data.redeemPoints.error.detail);
        }
      })
      .catch((error) => {
        throw_error(error);
      });
  };

  if (
    !globalState ||
    globalState.subscriptionLoading ||
    globalState.customerLoading ||
    globalState.rewardAccountLoading
  ) {
    <LoadingPage />;
  }

  const rewards_account =
    globalState && globalState.rewardAccount ? globalState.rewardAccount : null;

  const points_balance = rewards_account ? rewards_account.star_balance : 0;

  return (
    <PageBackground>
      <ScreenForm noTopPadding>
        <LargeText black textAlign="center" maxWidth="300px" alignSelf="center" marginBottom="24px">
          Redeem your points for rewards
        </LargeText>
        {/* <PointSection> */}
        <SmallText bold>Your points balance</SmallText>
        <XXLargeText bold color={theme.colours.slate}>
          <CountUp start={0} end={points_balance} duration={0} separator="," />
        </XXLargeText>
        {/* </PointSection> */}
        <Spacer height={30} />
        <MediumText bold color={theme.colours.black}>
          Increase approval amount by
        </MediumText>
        <RedemptionSelectionRow>
          <RedemptionSection>
            <SelectionBox
              selected={selectedApproval === 1000}
              onClick={() => {
                handleClickApprovalAmount(1000);
              }}
              width="100px"
              height="55px"
              vertical={true}
              marginBottom="8px"
              contentPadding="10px 5px 8px 5px"
              background={theme.colours.white}
              borderColor={theme.colours.lightBlueGrey}
            >
              <MediumText bold>{'+10$'}</MediumText>
            </SelectionBox>
            <SmallText bold color={theme.colours.slate}>
              11,100 Points
            </SmallText>
          </RedemptionSection>
          <RedemptionSection>
            <SelectionBox
              selected={selectedApproval === 2000}
              onClick={() => {
                handleClickApprovalAmount(2000);
              }}
              width="100px"
              height="55px"
              vertical={true}
              marginBottom="8px"
              contentPadding="10px 5px 8px 5px"
              background={theme.colours.white}
              borderColor={theme.colours.lightBlueGrey}
            >
              <MediumText bold>{'+20$'}</MediumText>
            </SelectionBox>
            <SmallText bold color={theme.colours.slate}>
              19,100 Points
            </SmallText>
          </RedemptionSection>
          <RedemptionSection>
            <SelectionBox
              selected={selectedApproval === 3000}
              onClick={() => {
                handleClickApprovalAmount(3000);
              }}
              width="100px"
              height="55px"
              vertical={true}
              marginBottom="8px"
              contentPadding="10px 5px 8px 5px"
              background={theme.colours.white}
              borderColor={theme.colours.lightBlueGrey}
            >
              <MediumText bold>{'+30$'}</MediumText>
            </SelectionBox>
            <SmallText bold color={theme.colours.slate}>
              28,300 Points
            </SmallText>
          </RedemptionSection>
        </RedemptionSelectionRow>

        <TinyText
          onClick={() => {
            window.open('https://nyble.com/redemption', '_blank');
          }}
          black
        >
          Looking for more rewards options? {'>'}
        </TinyText>
        <TinyText textAlign="center">To redeem giftcards, please contact support.</TinyText>

        <Spacer height={18} />
        <Button onClick={() => handleRedeemPoints()}>
          <ButtonText bold>Redeem my points</ButtonText>
        </Button>
        <Spacer height={32} />
      </ScreenForm>
    </PageBackground>
  );
};

export default RedemptionScreen;
