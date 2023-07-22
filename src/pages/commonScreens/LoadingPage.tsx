import React from 'react';
import ScreenForm from 'pagesShared/ScreenForm';
import Lottie from 'react-lottie';

import useScreenType from 'utils/windowSize/useScreenType';
import { useTheme } from 'styled-components';
import Spacer from 'components/position/Spacer';
import { FormDisclaimer, MediumText } from 'components/styling/Text';

import loaderAnimation from 'assets/lottieAnimationJsons/loader.json';
import { PageRawInnerContentWrapper, PageWrapper } from 'pagesShared/styles/Wrappers';

const LoadingPage = () => {
  const theme = useTheme();
  const { isMobile } = useScreenType();
  const innerWidth = isMobile ? '250px' : '350px';
  const animationSize = isMobile ? 100 : 150;

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: loaderAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <PageWrapper background={theme.newColours.white}>
      <PageRawInnerContentWrapper>
        <Spacer height={150} />
        <Lottie options={animationOptions} height={animationSize} width={animationSize} />
        <Spacer height={16} />
        <MediumText bold marginBottom="24px">
          Loading...
        </MediumText>
      </PageRawInnerContentWrapper>
    </PageWrapper>
  );
};

export default LoadingPage;
