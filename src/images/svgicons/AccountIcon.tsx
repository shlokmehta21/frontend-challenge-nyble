import theme from "GlobalTheme";
import { TABS } from "pages/homePage/homePageState";
import React, { FC } from "react";

type AccountIconPropsType = {
  height?: string;
  width?: string;
  isActive?: boolean;
  currentTab?: string;
};

const AccountIcon: FC<AccountIconPropsType> = ({
  isActive,
  currentTab,
  height = "30",
  width = "30",
}) => {
  const strokeColor =
    isActive && currentTab === TABS.ACCOUNT_TAB
      ? theme.colours.black
      : theme.colours.primary.main;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 1.25V28.75"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.25 6.25H11.875C10.7147 6.25 9.60188 6.71094 8.78141 7.53141C7.96094 8.35188 7.5 9.46468 7.5 10.625C7.5 11.7853 7.96094 12.8981 8.78141 13.7186C9.60188 14.5391 10.7147 15 11.875 15H18.125C19.2853 15 20.3981 15.4609 21.2186 16.2814C22.0391 17.1019 22.5 18.2147 22.5 19.375C22.5 20.5353 22.0391 21.6481 21.2186 22.4686C20.3981 23.2891 19.2853 23.75 18.125 23.75H7.5"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AccountIcon;