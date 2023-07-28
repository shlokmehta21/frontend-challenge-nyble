import React from "react";
import { HomePageTabWrapper, HomePageWrapper } from "./styles/HomePage";
import { LargeText } from "Mixins/Font";
import Spacer from "components/position/Spacer";
import PageBackground from "pagesShared/Background";
import { useHomePageState, TABS, ACTIONS } from "./homePageState";
import { AccountTab } from "./tabs/AccountTab";
import { RewardsTab } from "./tabs/RewardsTab";
import { WoofTab } from "./tabs/WoofTab";
import TabButton from "components/widget/tabButton/TabButton";
import AccountIcon from "images/svgicons/AccountIcon";
import RewardsIcon from "images/svgicons/RewardsIcon";
import WoofIcon from "images/svgicons/WoofIcon";
import { Row } from "components/styling/common";
import theme from "GlobalTheme";
import Button from "components/widget/button/Button";
import { useWindowSize } from "utils/windowSize/useWindowSize";

const HomePage = () => {
  const [state, dispatch] = useHomePageState();
  const [width] = useWindowSize();

  /**
   * @function switchTab: Switches the current tab to the tab passed in as a parameter (tab)
   *
   * @param /TABS.ACCOUNT_TAB/ TABS.REWARDS_TAB / TABS.WOOF_TAB
   */
  const switchTab = (tab: keyof typeof TABS) => {
    dispatch({
      type: ACTIONS.SWITCH_TAB,
      payload: {
        newTab: tab,
      },
    });
  };

  const tabs = {
    [TABS.ACCOUNT_TAB]: <AccountTab />,
    [TABS.REWARDS_TAB]: <RewardsTab />,
    [TABS.WOOF_TAB]: <WoofTab />,
  };

  // Tab Buttons content:
  const tabButtons = [
    {
      Icon: AccountIcon,
      text: "Account",
      bgColor: theme.colours.primary.main,
      onClick: () => switchTab(TABS.ACCOUNT_TAB),
      currentTab: state.currTab,
      isActive: state.currTab === TABS.ACCOUNT_TAB,
    },
    {
      Icon: RewardsIcon,
      text: "Rewards",
      bgColor: theme.colours.secondary.main,
      onClick: () => switchTab(TABS.REWARDS_TAB),
      currentTab: state.currTab,
      isActive: state.currTab === TABS.REWARDS_TAB,
    },
    {
      Icon: WoofIcon,
      text: "Woof",
      bgColor: theme.colours.neutral.dark,
      onClick: () => switchTab(TABS.WOOF_TAB),
      currentTab: state.currTab,
      isActive: state.currTab === TABS.WOOF_TAB,
    },
  ];

  return (
    <HomePageWrapper>
      <PageBackground>
        <Spacer height={24} />

        <LargeText
          bold={true}
          alignSelf="flex-start"
          textAlign="left"
          marginBottom="12px"
        >
          Welcome back, Billy
        </LargeText>

        {/* Tabs: using @coponent: TabButton */}
        <Row
          flex="1"
          gap="5%"
          alignSelf="flex-start"
          padding="0"
          maxHeight="15%"
        >
          {tabButtons.map((tabButton) => (
            <TabButton
              key={tabButton.text}
              Icon={tabButton.Icon}
              text={tabButton.text}
              bgColor={tabButton.bgColor}
              onClick={tabButton.onClick}
              currentTab={tabButton.currentTab}
              isActive={tabButton.isActive}
            />
          ))}
        </Row>

        <HomePageTabWrapper>{tabs[state.currTab]}</HomePageTabWrapper>

        <Spacer height={width <= 740 ? 60 : 25} />

        {/* Logout Button using @component: Button */}
        <Button
          text="Logout"
          backgroundColor={theme.colours.transparent}
          border="3px solid"
          borderColor={theme.colours.neutral.dark}
          padding="1rem 8rem"
          color={theme.colours.neutral.dark}
          font="medium"
        />

        <Spacer height={10} />
      </PageBackground>
    </HomePageWrapper>
  );
};

export default HomePage;
