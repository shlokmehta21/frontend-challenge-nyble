import { SmallHeading } from "Mixins/Font";
import { Column } from "components/styling/common";
import React, { FC } from "react";
import { Circle, TabButtonWrapper } from "./styles/TabButton";

interface IconProps {
  isActive?: boolean;
  currentTab?: string;
}

interface ButtonProps {
  Icon: React.FC<IconProps>;
  text: string;
  bgColor: string;
  onClick?: () => void;
  currentTab: string;
  isActive?: boolean;
}

const Button: FC<ButtonProps> = ({
  Icon,
  text,
  bgColor,
  onClick,
  currentTab,
  isActive,
}) => {
  return (
    <TabButtonWrapper
      onClick={onClick}
      bgColor={bgColor}
      currentTab={currentTab}
      isActive={isActive}
    >
      <Column alignItems="center" justifyContent="space-between">
        <Circle>
          <Icon isActive={isActive} currentTab={currentTab} />
        </Circle>
        <SmallHeading
          textAlign="flex-start"
          color={isActive && currentTab !== "WOOF_TAB" ? "black" : "white"}
        >
          {text}
        </SmallHeading>
      </Column>
    </TabButtonWrapper>
  );
};

export default Button;
