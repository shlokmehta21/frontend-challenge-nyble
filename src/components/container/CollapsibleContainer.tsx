import React, { ReactNode, useState } from 'react';
import Collapsible from 'react-collapsible';

import {
  Chevron,
  ContainerWrapper,
  ContentWrapper,
  HeaderChevronBox,
  HeaderWrapper,
} from './styles/CollapsibleContainer';

type CollapsibleContainerProps = {
  children: ReactNode;
  header?: () => React.ReactNode;
  headerPaddingRight?: string;
  headerClickable?: boolean;
  headerBorder?: boolean;
  width?: string;
  chevronBoxWidth?: string;
  isInitiallyOpen?: boolean;
  margin?: string;
  background?: string;
};

const CollapsibleContainer = ({
  header,
  headerPaddingRight,
  headerClickable,
  children,
  isInitiallyOpen = true,
  headerBorder = true,
  width = '100%',

  chevronBoxWidth = '24px',
  margin = '0 0 0 0',
  background = 'transparent',
}: CollapsibleContainerProps) => {
  const [isOpen, setIsOpen] = useState(isInitiallyOpen);
  return (
    <ContainerWrapper margin={margin} width={width}>
      <HeaderWrapper
        onClick={headerClickable ? () => setIsOpen(!isOpen) : undefined}
        cursor={headerClickable ? 'pointer' : undefined}
        headerBorder={isOpen && headerBorder}
        paddingRight={headerPaddingRight}
        background={background}
      >
        {header ? header() : null}
        <HeaderChevronBox
          onClick={() => setIsOpen(!isOpen)}
          onMouseDown={(e) => e.preventDefault()}
          width={chevronBoxWidth}
        >
          <Chevron open={isOpen} />
        </HeaderChevronBox>
      </HeaderWrapper>
      <Collapsible
        open={isOpen}
        transitionTime={300}
        easing="ease-in-out"
        trigger=""
        triggerDisabled={true}
      >
        <ContentWrapper>{children}</ContentWrapper>
      </Collapsible>
    </ContainerWrapper>
  );
};

export default CollapsibleContainer;
