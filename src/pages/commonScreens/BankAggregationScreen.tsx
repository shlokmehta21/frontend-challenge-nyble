import DotsLoader from 'components/display/DotsLoader';
import { LargeText, MediumText, TinyText } from 'components/styling/Text';
import { PageRawInnerContentWrapper } from 'pagesShared/styles/Wrappers';
import React, { useEffect, useState } from 'react';
import useScreenType from 'utils/windowSize/useScreenType';
import Lottie from 'react-lottie';
import toucanAnimationData from 'assets/lottieAnimationJsons/toucanAnimation.json';
import blocksAnimation from 'assets/lottieAnimationJsons/blocks.json';
import fileDownloadAnimationData from 'assets/lottieAnimationJsons/fileDownloadAnimation.json';
import fileSearchAnimationData from 'assets/lottieAnimationJsons/fileSearchAnimation.json';
import Spacer from 'components/position/Spacer';
import {
  FadeContainer1,
  FadeContainer2,
  IFrame,
  IframeContainer,
} from './styles/BankAggregationScreen';
import sendRequestBankAggregationMutation from 'graphql/generated/mutations/requestBankAggregationMutation';
import { useApolloClient } from '@apollo/client';
import { BankAggregationProvider } from 'graphql/generated/serverModel';
import sendCompleteBankAggregationMutation from 'graphql/generated/mutations/completeBankAggregationMutation';
import { useToast } from 'components/widget/toast/Toast';
import LoadingPage from './LoadingPage';
import { PlaidLink, usePlaidLink } from 'react-plaid-link';
import { useTranslation } from 'react-i18next';

import i18n from 'utils/i18n';
import ScreenForm from 'pagesShared/ScreenForm';
import { useTheme } from 'styled-components';

export type LoadingStepPackage = {
  text: string;
  animation: object;
  duration?: number; // in seconds
};

const loadingStepPackages: LoadingStepPackage[] = [
  {
    text: i18n.t('epa.connect_bank_screen.authorizing'),
    animation: toucanAnimationData,
    duration: 15,
  },
  {
    text: i18n.t('epa.connect_bank_screen.linking'),
    animation: blocksAnimation,
    duration: 30,
  },
  {
    text: i18n.t('epa.connect_bank_screen.pulling'),
    animation: fileDownloadAnimationData,
    duration: 30,
  },
  {
    text: i18n.t('epa.connect_bank_screen.analyze'),
    animation: fileSearchAnimationData,
  },
];

const FlinksSteps = {
  REDIRECT: 'REDIRECT',
};

type BankAggregationScreenPropsType = {
  onSuccess: () => void;
};

const BankAggregationScreen = ({ onSuccess }: BankAggregationScreenPropsType) => {
  const { isMobile } = useScreenType();
  const apolloClient = useApolloClient();
  const innerWidth = isMobile ? '250px' : '300px';
  const animationSize = isMobile ? 160 : 250;
  const { t, i18n } = useTranslation();
  const [openSuccessToast, openErrorToast] = useToast();

  const [iframeUrl, setIframeUrl] = useState('');
  const [provider, setProvider] = useState('');

  const theme = useTheme();

  const [bankAggregationIntentId, setBankAggregationIntentId] = useState('');

  const [initializing, setInitializing] = useState(true);
  const [aggregating, setAggregating] = useState(false);
  // For aggregatin animation steps
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    if (aggregating && loadingStepPackages[stepIndex].duration) {
      setTimeout(() => {
        setStepIndex((prevIndex) => prevIndex + 1);
      }, loadingStepPackages[stepIndex].duration * 1000);
    }
  }, [stepIndex, aggregating]);

  const handleFlinksMessages = (e: any) => {
    if (e.data.step == FlinksSteps.REDIRECT) {
      onIframeComplete({
        flinks_login_id: e.data.loginId,
        account_id: e.data.accountId,
      });
    }
  };

  useEffect(() => {
    window.addEventListener('message', handleFlinksMessages);

    return () => {
      window.removeEventListener('message', handleFlinksMessages);
    };
  }, [handleFlinksMessages]);

  useEffect(() => {
    sendRequestBankAggregationMutation(apolloClient, {})
      .then((res) => {
        if (res.data && res.data.requestBankAggregation.success) {
          let provider = res.data.requestBankAggregation.data.provider;
          setBankAggregationIntentId(res.data.requestBankAggregation.data.id);
          if (provider === BankAggregationProvider.FLINKS) {
            let flinks_iframe_url = res.data.requestBankAggregation.data.flinks_iframe_link;
            if (i18n.language === 'fr') {
              flinks_iframe_url += '&language=fr';
            }
            setIframeUrl(flinks_iframe_url);
            setProvider(provider);
          } else if (provider === BankAggregationProvider.PLAID) {
            setProvider(provider);
            let link_token = res.data.requestBankAggregation.data.plaid_link_token;
            setIframeUrl(link_token);
          }
          setInitializing(false);
        } else if (res.data && res.data.requestBankAggregation.error) {
          openErrorToast(res.data.requestBankAggregation.error.detail);
        } else {
          openErrorToast(t('epa.connect_bank_screen.unable'));
        }
      })
      .catch((err) => {
        openErrorToast(t('epa.connect_bank_screen.unable'));
      });
  }, []);

  const onIframeComplete = (args: {
    flinks_login_id?: string;
    plaid_access_token?: string;
    account_id?: string;
  }) => {
    setAggregating(true);

    sendCompleteBankAggregationMutation(apolloClient, {
      bank_aggregation_intent_id: bankAggregationIntentId,

      ...(provider === BankAggregationProvider.FLINKS
        ? {
            flinks_login_id: args.flinks_login_id,
            account_id: args.account_id,
          }
        : {}),
      ...(provider === BankAggregationProvider.PLAID
        ? {
            plaid_public_token: args.plaid_access_token,
          }
        : {}),
    })
      .then((res) => {
        setAggregating(false);
        if (res.data && res.data.completeBankAggregation.success) {
          openSuccessToast('Success!');
          onSuccess();
        } else if (res.data && res.data.completeBankAggregation.error) {
          openErrorToast(res.data.completeBankAggregation.error.detail);
        } else {
          openErrorToast(t('epa.connect_bank_screen.unable'));
        }
      })
      .catch((err) => {
        setAggregating(false);
        openErrorToast(t('epa.connect_bank_screen.unable'));
      });
  };

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingStepPackages[stepIndex].animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  if (aggregating) {
    return (
      <>
        <Lottie options={animationOptions} height={animationSize} width={animationSize} />
        <Spacer height={48} />
        <MediumText black alignSelf="center" textAlign="center" marginBottom="8px">
          {loadingStepPackages[stepIndex].text}
        </MediumText>
        {stepIndex + 1 < loadingStepPackages.length && (
          <FadeContainer1>
            <MediumText
              black
              alignSelf="center"
              textAlign="center"
              color={theme.colours.darkBlueGrey}
            >
              {loadingStepPackages[stepIndex + 1].text}
            </MediumText>
          </FadeContainer1>
        )}
        {stepIndex + 2 < loadingStepPackages.length && (
          <FadeContainer2>
            <MediumText alignSelf="center" textAlign="center" black color={theme.colours.blueGrey}>
              {loadingStepPackages[stepIndex + 2].text}
            </MediumText>
          </FadeContainer2>
        )}
      </>
    );
  }
  if (initializing) {
    return <LoadingPage />;
  }

  return (
    <>
      <LargeText alignSelf="center" black textAlign="center" marginBottom="8px">
        Verify & connect bank
      </LargeText>
      <TinyText textAlign="center" maxWidth="350px" alignSelf="center">
        Make sure to connect your primary bank account with payroll. This account is where we will
        send the advance and collect from.
      </TinyText>
      {provider && provider === BankAggregationProvider.FLINKS && (
        <IframeContainer>
          <IFrame src={iframeUrl} />
        </IframeContainer>
      )}
      {provider && provider === BankAggregationProvider.PLAID && (
        <PlaidLink
          token={iframeUrl}
          onSuccess={(public_token, metadata) => {
            onIframeComplete({ plaid_access_token: public_token });
          }}
        >
          Connect Your Account
        </PlaidLink>
      )}
    </>
  );
};

export default BankAggregationScreen;
