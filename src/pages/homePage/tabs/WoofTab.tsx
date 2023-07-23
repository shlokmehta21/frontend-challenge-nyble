import { useApolloClient } from "@apollo/client";
import { useToast } from "components/widget/toast/Toast";
import sendWoofMutation from "graphql/generated/mutations/woofMutation";
import { LargeText } from "mixins/Font";
import React from "react"

export type WoofTabProps = {}

export const WoofTab = ({}: WoofTabProps) => {
  
  const apolloClient = useApolloClient();
  const [openSuccessToast, openErrorToast] = useToast();

  const onWoof = () => {
  /**
   * Complete with your implementation
   * 
  sendWoofMutation(apolloClient, {
    timestamp: ...
  }).then((res) => {
    openSuccessToast("Woofed!");
    ...
  }).catch((err) => {
    openErrorToast("Error during woof");
    ...
  })
  */
  
  }

  return (
    <>
      <LargeText>
        Add your implementation
      </LargeText>
    </>
  )
}