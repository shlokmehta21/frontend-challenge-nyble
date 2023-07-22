import React, { useEffect, useState } from 'react';
import { useApolloClient } from '@apollo/client';
import Spacer from 'components/position/Spacer';
import { useToast } from 'components/widget/toast/Toast';
import { Form, Formik, FormikErrors } from 'formik';
import sendSendReferralInviteMutation from 'graphql/generated/mutations/sendReferralInviteMutation';
import { PageType } from 'pages/pageType';
import { HeaderSection, HomePageWrapper, PageWrapper } from 'pagesShared/styles/Wrappers';

import { useHistory } from 'react-router';
import { ACCOUNT_PAGE_ROUTE, HOME_PAGE_ROUTE } from 'Routes';
import { useTheme } from 'styled-components';
import { validateEmail } from 'utils/validation/validate';
import ScreenForm from 'pagesShared/ScreenForm';

import megaphoneIllustration from 'images/illustrations/megaphone.png';
import {
  ButtonText,
  LargeText,
  MediumText,
  SmallText,
  TinyText,
  XLargeText,
} from 'components/styling/Text';
import { CodeSection, InfoSection } from './styles/ReferralPage';
import WithCheckmark from 'components/display/WithCheckmark';
import TextInputSection from 'components/input/formik/TextInputSection';
import SubmitButton from 'components/input/formik/SubmitButton';
import { MobileNavbarSpacer } from 'components/widget/navbar/styles/MobileNavbar';
import { Clipboard } from 'react-feather';
import PageBackground from 'pagesShared/Background';

type ReferralPagePropsType = {
  code: string;
};

type SendReferralInviteType = {
  email: string;
};

const ReferralPage = ({ code }: ReferralPagePropsType) => {
  const theme = useTheme();

  const history = useHistory();

  const apolloClient = useApolloClient();

  const [openSuccessToast, openErrorToast] = useToast();

  const [referee_email, set_referee_email] = useState('');

  const onBack = () => {
    history.push(ACCOUNT_PAGE_ROUTE);
  };

  const onEmailInputUpdate = (val: string) => {
    set_referee_email(val);
  };

  const initialValues: SendReferralInviteType = {
    email: '',
  };

  const onSubmit = (values: SendReferralInviteType) => {
    sendSendReferralInviteMutation(apolloClient, {
      email: values.email,
    }).then((res) => {
      if (res.data && res.data.sendReferralInvite.success) {
        openSuccessToast(`Success! Your invite was sent 📣`);
      } else if (res.data.sendReferralInvite.error) {
        openErrorToast(res.data.sendReferralInvite.error.detail);
      }
    });
  };

  const validateOnSubmit = (values: SendReferralInviteType) => {
    let errors: FormikErrors<SendReferralInviteType> = {};

    if (values.email == '') {
      errors.email = 'Required';
      return errors;
    }

    if (!validateEmail(values.email)) {
      errors.email = 'Must be valid email';
      return errors;
    }
  };

  return (
    <PageBackground noFooter>
      <ScreenForm onBack={onBack} useAllSpace>
        <LargeText black marginBottom="12px" textAlign="center" maxWidth="280px">
          Refer friends, get approved more & earn points
        </LargeText>

        <img src={megaphoneIllustration} style={{ width: 90, height: 90, marginBottom: 12 }} />

        <CodeSection>
          <TinyText alignSelf="center" bold>
            Your unique referral code
          </TinyText>
          <XLargeText bold alignSelf="center">
            {code}{' '}
            <Clipboard
              height={20}
              color={theme.newColours.slate}
              onClick={() => {
                navigator.clipboard.writeText(code);
                openSuccessToast('Referral Code Copied!');
              }}
            />
          </XLargeText>
        </CodeSection>
        <InfoSection>
          <MediumText bold alignSelf="center" marginBottom="12px">
            How it works
          </MediumText>
          <WithCheckmark>
            <SmallText maxWidth="250px">
              Tell a friend to sign up using your unique referral code
            </SmallText>
          </WithCheckmark>

          <WithCheckmark>
            <SmallText maxWidth="250px">
              You will <SmallText bold>both get +$5 </SmallText>approval on your next advance once
              your friend has successfully repaid their first advance
            </SmallText>
          </WithCheckmark>
          <WithCheckmark>
            <SmallText maxWidth="250px">
              You will earn an<SmallText bold> extra 500 points</SmallText> upon completion.
            </SmallText>
          </WithCheckmark>
        </InfoSection>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validate={validateOnSubmit}
          validateOnChange={false}
          validateOnBlur={false}
        >
          <Form>
            <SmallText bold alignSelf="center" marginBottom="8px">
              Send your friend your referral code!
            </SmallText>
            <TextInputSection name="email" placeholder="Email Address" />

            <Spacer height={12} />
            <SubmitButton>
              <ButtonText bold>Send referral invite</ButtonText>
            </SubmitButton>
          </Form>
        </Formik>
        <Spacer height={32} />
      </ScreenForm>
      <Spacer height={150} />
    </PageBackground>
  );
};

export default ReferralPage;
