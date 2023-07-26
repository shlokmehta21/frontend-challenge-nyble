import { useApolloClient } from "@apollo/client";
import Button from "components/widget/button/Button";
import { useToast } from "components/widget/toast/Toast";
import theme from "GlobalTheme";
import sendWoofMutation from "graphql/generated/mutations/woofMutation";
import { LargeHeading, MediumHeading } from "Mixins/Font";
import React, { useState } from "react";
import { TabTopWrapper } from "./styles/commonTabStyles";
import { useWindowSize } from "utils/windowSize/useWindowSize";

export type WoofTabProps = {};

export const WoofTab = ({}: WoofTabProps) => {
  const apolloClient = useApolloClient();
  const [openSuccessToast, openErrorToast] = useToast();
  const [width] = useWindowSize();
  const [loading, setLoading] = useState(false);

  const onWoof = () => {
    // Set loading to true when clicked
    setLoading(true);
    sendWoofMutation(apolloClient, {
      timestamp: new Date().getTime().toString(),
    })
      .then((res) => {
        openSuccessToast("Woofed!");
        // Set loading to false when done
        setLoading(false);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        openErrorToast("Error during woof");
      });
  };

  return (
    <TabTopWrapper>
      {/* Mobile: MediumHeading Tablet/Desktop: LargeHeading */}
      {width <= 740 ? (
        <MediumHeading alignSelf="center" maxWidth="80%">
          Woof
        </MediumHeading>
      ) : (
        <LargeHeading alignSelf="center">Woof</LargeHeading>
      )}

      {/* Changing button based on screen size for responsiveness */}
      {width <= 740 ? (
        <Button
          text="Click here to woof"
          alignSelf="center"
          backgroundColor={theme.colours.neutral.dark}
          border="3px solid"
          borderColor={theme.colours.neutral.dark}
          marginTop="25%"
          padding={`1rem ${loading ? "9rem" : "4rem"}}`}
          color={theme.colours.white}
          onClick={onWoof}
          loading={loading}
          disabled={loading}
          font="medium"
        />
      ) : (
        <Button
          text="Click here to woof"
          alignSelf="center"
          backgroundColor={theme.colours.neutral.dark}
          border="3px solid"
          borderColor={theme.colours.neutral.dark}
          marginTop="15%"
          padding={`1rem ${loading ? "12.5rem" : "8rem"}}`}
          color={theme.colours.white}
          onClick={onWoof}
          loading={loading}
          disabled={loading}
          font="medium"
        />
      )}
    </TabTopWrapper>
  );
};
