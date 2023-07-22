import React from 'react';
import useScreenType from 'utils/windowSize/useScreenType';
import dotsAnimationData from 'assets/lottieAnimationJsons/dotsAnimation.json';
import Lottie from 'react-lottie';

const DotsLoader = () => {
  const { isMobile } = useScreenType();

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: dotsAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const animationSize = isMobile ? 100 : 200;

  return <Lottie options={animationOptions} height={animationSize} width={animationSize} />;
};

export default DotsLoader;
