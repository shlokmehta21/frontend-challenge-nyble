import useGetRewardsQuery from "graphql/generated/queries/getRewardsQuery";
import {
  LargeHeading,
  MediumHeading,
  SmallText,
  VeryLargeText,
} from "Mixins/Font";
import React from "react";
import { TabTopWrapper } from "./styles/commonTabStyles";
import { ImageWrapper } from "../styles/HomePage";
import theme from "GlobalTheme";
import doggy_bone from "images/bone.png";
import { Column, SpinnerWrapper } from "components/styling/common";
import { useWindowSize } from "utils/windowSize/useWindowSize";

export type RewardsTabProps = {};

export const RewardsTab = ({}: RewardsTabProps) => {
  const { data, loading, refetch, error } = useGetRewardsQuery();
  const rewards = data && data.getRewards.success ? data.getRewards.data : null;
  const [width] = useWindowSize();

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
          <MediumHeading alignSelf="center" maxWidth="80%" marginBottom="5%">
            Your rewards
          </MediumHeading>
        ) : (
          <LargeHeading alignSelf="center">Your rewards</LargeHeading>
        )}

        <ImageWrapper src={doggy_bone} alt="picture of Doggy Bone" />

        <VeryLargeText bold={true} color={theme.colours.secondary.dark}>
          {rewards.bones} Bones
        </VeryLargeText>

        <SmallText
          maxWidth={width <= 740 ? "80%" : "60%"}
          textAlign="center"
          marginTop={width <= 740 ? "40px" : "20px"}
        >
          You'll earn a bone every time you achive a "good boy" status.
        </SmallText>
      </TabTopWrapper>
    </>
  );
};
