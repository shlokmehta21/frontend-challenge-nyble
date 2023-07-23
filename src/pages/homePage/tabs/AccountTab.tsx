import useGetAccountQuery from "graphql/generated/queries/getAccountQuery"
import { LargeText } from "mixins/Font";
import React from "react"

export type AccountTabProps = {}

export const AccountTab = ({}: AccountTabProps) => {

  const {data, loading, refetch} = useGetAccountQuery();

  const account = data && data.getAccount.success ? data.getAccount.data : null;

  if (loading) {
    return <>
    </>
  }

  return (
    <>
      <LargeText>
        Add your implementation
      </LargeText>
    </>
  )
}