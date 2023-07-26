import { Column, SpinnerWrapper } from "components/styling/common";
import useGetAccountQuery from "graphql/generated/queries/getAccountQuery";
import {
  LargeHeading,
  MediumHeading,
  MediumText,
  SmallText,
  VeryLargeText,
} from "Mixins/Font";
import React from "react";
import doggy_dollar from "images/doggy_dollar.png";
import { ImageWrapper } from "../styles/HomePage";
import theme from "GlobalTheme";
import { TabBottomWrapper, TabTopWrapper } from "./styles/commonTabStyles";
import Button from "components/widget/button/Button";
import { useWindowSize } from "utils/windowSize/useWindowSize";

export type AccountTabProps = {};

export const AccountTab = ({}: AccountTabProps) => {
  const { data, loading, refetch, error } = useGetAccountQuery();
  const [width] = useWindowSize();
  const account = data && data.getAccount.success ? data.getAccount.data : null;

  // Format number from currency (123456) to 2 decimal places (1,234.56)
  const formattedNumber =
    account &&
    (account.balance / 100).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  // If loading, show spinner
  if (loading) {
    return (
      <Column alignItems="center" justifyContent="center">
        <SpinnerWrapper />
      </Column>
    );
  }

  // If Error, show error message
  if (error) {
    return (
      <Column alignItems="center" justifyContent="center">
        <SmallText color={theme.colours.error}>
          Oops! Something went wrong. Please try again later.
        </SmallText>
      </Column>
    );
  }

  return (
    <>
      <TabTopWrapper>
        {/* Mobile: MediumHeading Tablet/Desktop: LargeHeading */}
        {width <= 740 ? (
          <MediumHeading alignSelf="center" maxWidth="80%">
            Your current account balance is
          </MediumHeading>
        ) : (
          <LargeHeading alignSelf="center">
            Your current account balance is
          </LargeHeading>
        )}

        <ImageWrapper src={doggy_dollar} alt="picture of Doggy Dollar" />

        <VeryLargeText bold={true} color={theme.colours.primary.dark}>
          $D{account && formattedNumber}
        </VeryLargeText>

        <MediumText>{account && account.currency}</MediumText>
      </TabTopWrapper>

      <TabBottomWrapper>
        <SmallText marginBottom="5px">Account Status</SmallText>
        <Button
          text={account && account.status}
          backgroundColor={theme.colours.primary.light}
          color={theme.colours.primary.dark}
        />
      </TabBottomWrapper>
    </>
  );
};
