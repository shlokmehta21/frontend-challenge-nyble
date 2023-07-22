import useRewardsAccountQuery from 'graphql/generated/queries/rewardsAccountQuery';
import React from 'react';
import Lottie from 'react-lottie';
import { useTheme } from 'styled-components';
import useScreenType from 'utils/windowSize/useScreenType';
import { PointsFont, PointsWrapper } from './styles/RewardsBalancePill';
import starAnimation from 'assets/lottieAnimationJsons/starsAnimation.json';
import DotsLoader from 'components/display/DotsLoader';
import { Star } from 'react-feather';
import { MediumText, SmallText, TinyText } from 'components/styling/Text';
import useGlobalState from 'globalState/useGlobalState';
const RewardsBalancePill = () => {
  const { isMobile } = useScreenType();

  const [globalState, globalDispatch] = useGlobalState();

  let points = 0;

  const theme = useTheme();

  const animationOptions = {
    loop: false,
    autoplay: true,
    animationData: starAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const animationSize = isMobile ? 25 : 45;

  if (!globalState || globalState.rewardAccountLoading) {
    return (
      <PointsWrapper>
        <SmallText bold>🏆 ...</SmallText>
      </PointsWrapper>
    );
  }

  points = globalState.rewardAccount ? globalState.rewardAccount.star_balance : 0;

  return (
    <PointsWrapper>
      <TinyText bold>🏆 {points}</TinyText>
    </PointsWrapper>
  );
};

export default RewardsBalancePill;
