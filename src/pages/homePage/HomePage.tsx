import React from "react";
import { HomePageTabWrapper, HomePageWrapper } from "./styles/HomePage";
import { LargeHeading, LargeText } from "mixins/Font";
import Spacer from "components/position/Spacer";
import PageBackground from "pagesShared/Background";
import { useHomePageState, TABS } from './homePageState';
import { AccountTab } from "./tabs/AccountTab";
import { RewardsTab } from "./tabs/RewardsTab";
import { WoofTab } from "./tabs/WoofTab";

const HomePage = () => {

  const [state, dispatch] = useHomePageState();

  const switchTab = (tab: typeof TABS) => {
    dispatch({
      type: 'SWITCH_TAB',
      payload: {
        newTab: tab
      }
    })
  }

  const tabs = {
    [TABS.ACCOUNT_TAB]: (
      <AccountTab />
    ),
    [TABS.REWARDS_TAB]: (
      <RewardsTab />
    ),
    [TABS.WOOF_TAB]: (
      <WoofTab />
    ),
  };

  return (
    <PageBackground>
      <Spacer height={24} />
      <LargeText bold alignSelf="flex-start" textAlign="left" marginBottom="12px">
        Welcome back, Billy
      </LargeText>
      {
        /**
         * Add your implementation
         */
      }
      <Spacer height={24} />
      <HomePageTabWrapper>
        {tabs[state.currTab]}
      </HomePageTabWrapper>
    </PageBackground>
  )

}

export default HomePage;