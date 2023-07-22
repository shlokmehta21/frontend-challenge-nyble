import { FormBodyBold, FormHeader, FormSubHeader } from 'components/styling/Form';
import React, { ReactNode, useState } from 'react';
import { useTheme } from 'styled-components';

import { ContainerWrapper, ContentContainer, Tab, TabsWrapper } from './styles/TabContainer';

type TabContainerProps = {
  tabList: {
    onClick: () => void;
    title: string;
    render: () => ReactNode;
  }[];
  borderRadius?: boolean;
  initialSelectedTab?: number;
  onChange?: (index: number) => void;
  minTabWidth?: number;
  contentPadding?: string;
};

const TabContainer = ({
  tabList,
  borderRadius = true,
  contentPadding = '0px',
  initialSelectedTab = 0,
  minTabWidth = 150,
  onChange = () => {},
}: TabContainerProps) => {
  const [selectedTab, setSelectedTab] = useState(initialSelectedTab);
  const theme = useTheme();
  return (
    <ContainerWrapper borderRadius={borderRadius}>
      <TabsWrapper>
        {tabList.map((tab, index) => (
          <Tab
            key={index}
            minWidth={minTabWidth}
            selected={index === selectedTab}
            first={index === 0}
            last={index === tabList.length - 1}
            onClick={() => {
              tab.onClick();
              setSelectedTab(index);
              onChange(index);
            }}
            onMouseDown={(e) => e.preventDefault()}
            borderRadius={borderRadius}
          >
            <FormBodyBold
              color={index === selectedTab ? theme.colours.white : theme.colours.primary}
            >
              {tab.title}
            </FormBodyBold>
          </Tab>
        ))}
      </TabsWrapper>
      <ContentContainer padding={contentPadding}>{tabList[selectedTab].render()}</ContentContainer>
    </ContainerWrapper>
  );
};

export default TabContainer;
