import Button from 'components/input/button/Button';
import Spacer from 'components/position/Spacer';
import { ButtonText, MediumText } from 'components/styling/Text';
import useRewardsAccountQuery from 'graphql/generated/queries/rewardsAccountQuery';
import useSubscriptionQuery from 'graphql/generated/queries/subscriptionQuery';
import PageBackground from 'pagesShared/Background';
import ScreenForm from 'pagesShared/ScreenForm';
import React from 'react';
import LoadingPage from 'pages/commonScreens/LoadingPage';
import MainScreen from './screens/MainScreen';
import { SWITCH_ACTIONS, SCREENS, useRewardsPageState } from './rewardsPageState';
import RedemptionScreen from './screens/RedemptionScreen';

const RewardsPage = () => {
  const [state, dispatch] = useRewardsPageState();

  const {
    data: rawSubscriptionData,
    refetch: refetchSubscriptionData,
    loading: subscriptionDataLoading,
  } = useSubscriptionQuery();

  const { loading: rewardsAccountLoading } = useRewardsAccountQuery();

  const onPressRefresh = () => {
    refetchSubscriptionData();
  };

  const handleGoToRedeemScreen = () => {
    dispatch({
      type: SWITCH_ACTIONS.SWITCH_SCREEN,
      payload: { newScreen: SCREENS.REDEEM_SCREEN },
    });
  };

  const handleGoToRewardsScreen = () => {
    dispatch({
      type: SWITCH_ACTIONS.SWITCH_SCREEN,
      payload: { newScreen: SCREENS.MAIN_SCREEN },
    });
  };

  const screens = {
    [SCREENS.MAIN_SCREEN]: <MainScreen onGoToRedeemPoints={handleGoToRedeemScreen} />,
    [SCREENS.REDEEM_SCREEN]: <RedemptionScreen onRedeemPoints={handleGoToRewardsScreen} />,
  };

  if (subscriptionDataLoading || rewardsAccountLoading) {
    return <LoadingPage />;
  }

  const subscriptionData = rawSubscriptionData.subscription.success
    ? rawSubscriptionData.subscription.data
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

  return <PageBackground>{screens[state.currScreen]}</PageBackground>;
};

export default RewardsPage;
