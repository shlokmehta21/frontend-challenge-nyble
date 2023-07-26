import styled from "styled-components";
import { Hover } from "Mixins/Animation";

interface TabButtonWrapperProps {
  bgColor: string;
  currentTab: string;
  isActive: boolean;
}

export const TabButtonWrapper = styled.div<TabButtonWrapperProps>`
  background: ${({ bgColor }) => bgColor};
  height: 90px;
  width: 90px;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  border: 3px solid
    ${({ currentTab, theme, isActive }) =>
      isActive
        ? currentTab === "WOOF_TAB"
          ? theme.colours.secondary.main
          : theme.colours.black
        : "transparent"};
  ${Hover()};
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 3px;
  background: ${({ theme }) => theme.colours.white};
`;
