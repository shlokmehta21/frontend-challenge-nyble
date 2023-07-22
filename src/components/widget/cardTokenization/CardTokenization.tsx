import React, { useEffect, useRef, useState } from 'react';

import { useBasisTheory, CardElement } from '@basis-theory/basis-theory-react';
import { CardTokenizationWrapper } from './styles/CardTokenization';
import Button from 'components/input/button/Button';

import { useTheme } from 'styled-components';
import DotsLoader from 'components/display/DotsLoader';
import { sleep } from 'utils/time';
import { PageRawInnerContentWrapper, PageWrapper } from 'pagesShared/styles/Wrappers';
import { DotLoader } from 'react-spinners';
import { ButtonText } from 'components/styling/Text';
import Spacer from 'components/position/Spacer';
import { useStripe } from '@stripe/react-stripe-js';

type CardTokenizationPropsType = {
  onSuccessfulSubmit: (token_data: any, stripe_session_id?: string) => void;
  onErrorSubmit: (error: any) => void;
  noStripeRadar?: boolean;
  maxWidth?: string;
};

const CardTokenization = ({
  onSuccessfulSubmit,
  onErrorSubmit,
  noStripeRadar,
  maxWidth,
}: CardTokenizationPropsType) => {
  const theme = useTheme();

  const stripe = noStripeRadar ? null : useStripe();

  const cardRef = useRef(null);

  const { bt } = useBasisTheory();

  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    setLoading(true);
    let radar_session_id: string | null = null;
    if (stripe) {
      // @ts-ignore
      const { radarSession, error } = await stripe.createRadarSession();
      radar_session_id = radarSession ? radarSession.id : null;
    }
    // if (process.env.environment === 'development') {
    //   sleep(3000).then((res) => {
    //     setLoading(false);
    //     onSuccessfulSubmit({
    //       id: 'a682772f-e2ae-4ae0-9c43-d6f0f4e0186c',
    //     });
    //   });
    // } else {
    bt.tokenize({
      type: 'card',
      // @ts-ignore
      data: bt.getElement('card_bt_el'),
      mask: {
        number: '{{ data.number | reveal_last: 4 }}',
        expiration_month: `{{ data.expiration_month }}`,
        expiration_year: '{{ data.expiration_year }}',
        cvc: '{{ data.cvc }}',
      },
    })
      .then((tok: any) => {
        console.log(tok);
        setLoading(false);
        onSuccessfulSubmit(tok, radar_session_id);
      })
      .catch((err: any) => {
        setLoading(false);
        onErrorSubmit(err);
      });
    // }
  };

  useEffect(() => {
    if (bt) {
      setReady(true);
    }
  }, [bt]);

  if (!ready) {
    return (
      <PageWrapper>
        <PageRawInnerContentWrapper>
          <DotLoader color={theme.newColours.slate} />
        </PageRawInnerContentWrapper>
      </PageWrapper>
    );
  }

  return (
    <CardTokenizationWrapper>
      <CardElement
        id="card_bt_el"
        ref={cardRef}
        style={{
          fonts: ['https://fonts.googleapis.com/css2?family=Poppins&display=swap'],
          base: {
            color: '#000',
            fontWeight: 600,
            fontFamily: "'Poppins-Bold', sans-serif",
            fontSize: '14px',

            '::placeholder': {
              color: theme.colours.darkBlueGrey,
            },
          },
          invalid: {
            color: theme.colours.error,
          },
          complete: {
            color: theme.colours.success,
          },
        }}
      />

      {loading ? (
        <Button width={maxWidth ? maxWidth : '350px'} disabled>
          <ButtonText color={theme.newColours.white}>Encrypting your data...</ButtonText>
        </Button>
      ) : (
        <Button width={maxWidth ? maxWidth : '350px'} onClick={onSubmit}>
          <ButtonText>Submit</ButtonText>
        </Button>
      )}
      <Spacer height={32} />
    </CardTokenizationWrapper>
  );
};

export default CardTokenization;
