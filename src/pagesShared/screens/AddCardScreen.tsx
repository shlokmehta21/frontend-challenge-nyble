import React, { useEffect, useState } from 'react';
import { HeaderSection, PageWrapper } from 'pagesShared/styles/Wrappers';
import PageBackground from 'pagesShared/Background';
import ScreenForm from 'pagesShared/ScreenForm';
import { LargeText, MediumText, SmallText, TinyText } from 'components/styling/Text';
import CardTokenization from 'components/widget/cardTokenization/CardTokenization';
import { useTheme } from 'styled-components';
import { useStandardToast, useToast } from 'components/widget/toast/Toast';
import { MobileNavbarSpacer } from 'components/widget/navbar/styles/MobileNavbar';
import Spacer from 'components/position/Spacer';
import creditCardAnimationData from 'assets/lottieAnimationJsons/creditCardAnimation.json';

import DebitCardIllustration from 'images/illustrations/debit_card.png';

import Lottie from 'react-lottie';
import sendAddCardMutation from 'graphql/generated/mutations/addCardMutation';
import { useApolloClient } from '@apollo/client';
import sendRequest3DSMutation from 'graphql/generated/mutations/request3DSMutation';
import sendComplete3DSMutation from 'graphql/generated/mutations/complete3DSMutation';
import { useTranslation } from 'react-i18next';
import { Elements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import Button from 'components/input/button/Button';
import { ButtonText } from 'components/styling/Form';
import sendContinue3DSMutation from 'graphql/generated/mutations/continue3DSMutation';

export type AddCardScreenInputType = {
  onSuccess: () => void;
  onBack?: () => void;
  onError?: () => void;
};

const AddCardScreen = ({ onBack, onSuccess, onError }: AddCardScreenInputType) => {
  const theme = useTheme();
  const animationSize = 180;

  const [openSuccessToast, openErrorToast] = useToast();

  const [addCardLoading, setAddCardLoading] = useState(false);
  const [openStandardErrorToast] = useStandardToast();

  const apolloClient = useApolloClient();

  const [payment_provider, set_payment_provider] = useState('');

  const [need3DS, setNeed3DS] = useState(false);
  const [url3DS, setUrl3DS] = useState('');
  const [data3DS, setData3DS] = useState('');
  const [action3DS, setAction3DS] = useState('');

  const [await3DS, setAwait3DS] = useState(false);

  const { t, i18n } = useTranslation();
  const [stripePromise, setStripePromise] = useState<Promise<Stripe>>(null);

  const [zumrails_3ds_token, set_zumrails_3ds_token] = useState('');

  const [paymentMethodId, setPaymentMethodId] = useState('');

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: creditCardAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  window.addEventListener(
    'message',
    function (ev) {
      console.log('onEvent', ev, ev.data);
      if (ev.data === '3DS-authentication-complete') {
        handle3DSCompleted();
      } else if (ev.data === 'berkeley-3ds-authenticate-browser-complete') {
        onAuthenticateBrowserComplete();
      } else {
        let els = ev.data.split(';');
        let step = els[0];

        if (step === 'zumrails-3ds') {
          // console.log('HERE', els);
        }
        // console.log('Catching:: ', ev.data);
      }
    },
    false
  );

  useEffect(() => {
    const stripePromise = loadStripe(process.env.stripe__pkey);
    setStripePromise(stripePromise);
  }, []);

  const handle3DSCompleted = async () => {
    if (!await3DS) {
      console.log('Ignoring complete 3DS events');
      return;
    }
    setAwait3DS(false);
    setAddCardLoading(true);

    sendComplete3DSMutation(apolloClient, {
      payment_method_id: paymentMethodId,
    }).then((res) => {
      if (res.data && res.data.complete3DS.success) {
        openSuccessToast(`Debit card successfully added!`);
        setAddCardLoading(false);
        onSuccess();
      } else if (res.data && res.data.complete3DS.error) {
        openErrorToast(res.data.complete3DS.error.detail);
        setAddCardLoading(false);
      } else {
        setAddCardLoading(false);
        setAwait3DS(false);
        openStandardErrorToast();
      }
    });
  };

  const onAuthenticateBrowserComplete = async () => {
    console.log('onAuthenticateBrowserComplete');
    setAddCardLoading(true);
    sendContinue3DSMutation(apolloClient, {
      payment_method_id: paymentMethodId,
    }).then((res) => {
      if (res.data && res.data.continue3DS.success) {
        let _3ds_url = res.data.continue3DS.data.url;
        let _3ds_data = res.data.continue3DS.data.data;
        let _3ds_action = res.data.continue3DS.data.action;
        if (_3ds_action === 'COMPLETED') {
          onSuccess();
          openSuccessToast(`Debit card added successfully!`);
        } else if (_3ds_action === 'CHALLENGE') {
          set_payment_provider('BERKELEY');
          setUrl3DS(_3ds_url);
          setData3DS(_3ds_data);
          setAction3DS(_3ds_action);

          setAwait3DS(true);
          setAddCardLoading(false);
          setNeed3DS(true);
        } else {
          onSuccess();
          openSuccessToast(`Debit card added, unable to validate card`);
        }
      }
    });
  };

  const onSubmit = (token_data: any, stripe_session_id?: string) => {
    setAddCardLoading(true);

    const bt_token_id = token_data.id;

    sendAddCardMutation(apolloClient, {
      token_id: bt_token_id,
      stripe_radar_session_id: stripe_session_id,
    })
      .then((res) => {
        if (res.data && res.data.addCard.success) {
          setPaymentMethodId(res.data.addCard.data.id);
          sendRequest3DSMutation(apolloClient, {
            payment_method_id: res.data.addCard.data.id,
          }).then((rres) => {
            if (rres.data && rres.data.request3DS.success) {
              setAddCardLoading(false);
              setAwait3DS(true);
              let provider = rres.data.request3DS.data.provider;

              if (provider === 'ZUMRAILS') {
                let _3ds_token = rres.data.request3DS.data.data;
                set_zumrails_3ds_token(_3ds_token);
                set_payment_provider('ZUMRAILS');

                setNeed3DS(true);
              } else if (provider === 'STRIPE') {
                let _3ds_url = rres.data.request3DS.data.url;

                if (_3ds_url === '') {
                  // No iframe authentication needed

                  onSuccess();
                  openSuccessToast(`Debit card successfully added!`);
                  return;
                }
                set_payment_provider('STRIPE');
                setUrl3DS(_3ds_url);
                setNeed3DS(true);
                setAddCardLoading(false);
              } else if (provider === 'BERKELEY') {
                let _3ds_url = rres.data.request3DS.data.url;
                let _3ds_data = rres.data.request3DS.data.data;
                let _3ds_action = rres.data.request3DS.data.action;

                console.log('\n\n\n\n\nHEEEER', rres.data.request3DS.data);

                if (_3ds_action === 'COMPLETED') {
                  onSuccess();
                  openSuccessToast(`Debit card added successfully!`);
                }

                set_payment_provider('BERKELEY');
                setUrl3DS(_3ds_url);
                setData3DS(_3ds_data);
                setAction3DS(_3ds_action);
                setNeed3DS(true);
                setAddCardLoading(false);
              } else {
                handle3DSCompleted();
                setAddCardLoading(false);
              }
            } else if (rres.data.request3DS.error) {
              setAddCardLoading(false);
              openErrorToast(rres.data.request3DS.error.detail);
              onError();
            } else {
              setAddCardLoading(false);
              openStandardErrorToast();
              onError();
            }
          });
        } else if (res.data && res.data.addCard.error) {
          setAddCardLoading(false);
          openErrorToast(res.data.addCard.error.detail);

          onError();
        } else {
          setAddCardLoading(false);
          openErrorToast(`An error occured, please try again`);
          onError();
        }
      })
      .catch((err) => {
        setAddCardLoading(false);
        openErrorToast(`An error occured, please try again`);
        onError();
      });
  };

  if (need3DS) {
    if (payment_provider === 'ZUMRAILS') {
      let html_string = `
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <script
                id="zumrailssdk"
                src="https://cdn.zumrails.com/sandbox/zumsdk.js"
                type="text/javascript"
                async=""
              ></script>
            </head>
            <body>
              <script>
                window.addEventListener('load', function () {
                  ZumRailsSDK.init({
                    token: "${zumrails_3ds_token}",
                    onLoad: function () {
                      console.log('onLoad');
                    },
                    onError: function (error) {
                      console.log('onError', error);
                      window.postMessage('zumrails-3ds;' + JSON.stringify(error));
                    },
                    onSuccess: function (data) {
                      console.log('onStepChanged', data);
                      window.postMessage('zumrails-3ds;' + data.step);
                    },
                    onClosed: function () {
                      console.log('onConnectorClosed');
                    },
                  });
                });
              </script>
            </body>
          </html>    
    `;

      return (
        <>
          <LargeText bold marginBottom="12px" textAlign="center" maxWidth="300px">
            {t('epa.add_card_screen.please')}
          </LargeText>
          <MediumText bold marginBottom="24px" textAlign="center" maxWidth="300px">
            {t('epa.add_card_screen.to_validate')}
          </MediumText>
          <iframe srcDoc={html_string} height="800px" width="400px" />
        </>
      );
    } else if (payment_provider === 'STRIPE') {
      return (
        <ScreenForm useAllSpace noInnerPadding>
          <LargeText bold marginBottom="12px" textAlign="center" maxWidth="300px">
            {t('epa.add_card_screen.please')}
          </LargeText>
          <MediumText bold marginBottom="24px" textAlign="center" maxWidth="300px">
            {t('epa.add_card_screen.to_validate')}
          </MediumText>
          <iframe src={url3DS} height="400px" width="250px" />
        </ScreenForm>
      );
    } else if (payment_provider === 'BERKELEY' && action3DS === 'AUTHENTICATE_BROWSER') {
      const html_string = `
        <!DOCTYPE html>
        <html>
          <body>
            <form name="sendFingerprint" action="${url3DS}" method="post">
              <input name="threeDSMethodData" value="${data3DS}" />
            </form>
          </body>
          <script type="text/javascript">
            setTimeout(function() {
                document.createElement('form').submit.call(document.sendFingerprint);
                window.postMessage('berkeley-3ds-authenticate-browser-complete');
            }, 100);
          </script>
        </html>
      `;
      return (
        <ScreenForm useAllSpace>
          <Spacer height={25} />
          <Lottie options={animationOptions} height={animationSize} width={animationSize} />
          <Spacer height={24} />
          <MediumText marginBottom="12px" alignSelf="center">
            Authenticating your card...
          </MediumText>
          <iframe srcDoc={html_string} style={{ display: 'none' }} />
          <TinyText textAlign="center" marginBottom="12px" maxWidth="280px">
            {t('epa.add_card_screen.security')}
          </TinyText>
        </ScreenForm>
      );
    } else if (payment_provider === 'BERKELEY' && action3DS === 'CHALLENGE') {
      let html_string = `
        <!DOCTYPE html>
        <html>
          <body>
          <form name="sendChallenge" action="https://acs-server-sandbox.3dsintegrator.com/v2/challenge/ui" method="post">
            <input name="creq" value="eyJtZXNzYWdlVHlwZSI6IkNSZXEiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMS4wIiwidGhyZWVEU1NlcnZlclRyYW5zSUQiOiIyNzljZjUwYy1lZjM2LTQzMTMtYjA0ZC05NGNlZGZhZWRmZDQiLCJhY3NUcmFuc0lEIjoiZDZmMTVhYWUtMmM5ZC00MzMzLWE5MjAtOTU0YmUwN2MwYzc2IiwiY2hhbGxlbmdlV2luZG93U2l6ZSI6IjA0In0=" />
          </form>
          </body>
          <script type="text/javascript">
            setTimeout(function() {
                document.createElement('form').submit.call(document.sendChallenge);
            }, 100);
          </script>
        </html>
      `;

      return (
        <>
          <LargeText bold marginBottom="12px" textAlign="center" maxWidth="300px">
            {t('epa.add_card_screen.please')}
          </LargeText>
          <MediumText bold marginBottom="24px" textAlign="center" maxWidth="300px">
            {t('epa.add_card_screen.to_validate')}
          </MediumText>
          <iframe srcDoc={html_string} height="600px" width="300px" />

          <Button onClick={handle3DSCompleted}>
            <ButtonText>Done</ButtonText>
          </Button>
        </>
      );
    }
  }

  if (addCardLoading || !stripePromise) {
    return (
      <ScreenForm useAllSpace noInnerPadding>
        <Spacer height={100} />
        <Lottie options={animationOptions} height={animationSize} width={animationSize} />
        <Spacer height={24} />
        <MediumText marginBottom="12px" alignSelf="center">
          Adding your debit card...
        </MediumText>
        <TinyText textAlign="center" marginBottom="12px" maxWidth="280px">
          {t('epa.add_card_screen.security')}
        </TinyText>
      </ScreenForm>
    );
  }

  return (
    <ScreenForm onBack={onBack} noTopPadding noInnerPadding>
      <LargeText black textAlign="center" maxWidth="350px" marginBottom="12px">
        {t('epa.add_card_screen.add')}
      </LargeText>
      <img src={DebitCardIllustration} width="100px" height="100px" />
      <SmallText textAlign="center" marginBottom="12px" maxWidth="350px">
        {t('epa.add_card_screen.enter')}
      </SmallText>

      <Elements stripe={stripePromise}>
        <CardTokenization
          onSuccessfulSubmit={onSubmit}
          onErrorSubmit={() => {
            return onError ? onError() : null;
          }}
        />
      </Elements>
      <TinyText textAlign="center" marginBottom="12px" maxWidth="350px">
        {t('epa.add_card_screen.security')}
      </TinyText>
    </ScreenForm>
  );
};

export default AddCardScreen;
