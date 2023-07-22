import React from 'react';
import ScreenForm from 'pagesShared/ScreenForm';
import Lottie from 'react-lottie';

import useScreenType from 'utils/windowSize/useScreenType';
import { useTheme } from 'styled-components';
import Spacer from 'components/position/Spacer';
import { FormDisclaimer, MediumText } from 'components/styling/Text';
import paperPlaneAnimationData from 'assets/lottieAnimationJsons/paperPlaneAnimation.json';
import { PageWrapper } from 'pagesShared/styles/Wrappers';

import loaderAnimation from 'assets/lottieAnimationJsons/loader.json';

type LoadingScreenPropsType = {};

export const Loader = () => {
  const theme = useTheme();
  const animationSize = 55;

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: loaderAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <Lottie options={animationOptions} height={animationSize} width={animationSize} />
    </>
  );
};

const LoadingScreen = ({}: LoadingScreenPropsType) => {
  const theme = useTheme();
  const { isMobile } = useScreenType();
  const innerWidth = isMobile ? '250px' : '350px';
  const animationSize = isMobile ? 35 : 55;

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: loaderAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <ScreenForm useAllSpace>
      <Lottie options={animationOptions} height={animationSize} width={animationSize} />
    </ScreenForm>
  );
};

export default LoadingScreen;
