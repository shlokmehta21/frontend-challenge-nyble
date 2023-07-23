import styled from 'styled-components';
import { HeightWithNavbar, PageContentWidth, PageWidth } from 'mixins/Position';
import breakpoint from 'styled-components-breakpoint';

import { optional } from 'utils/styledComponents';
import { ScreenFormHorizontalPadding, ScreenFormVerticalPadding } from 'mixins/Style';
import theme from 'GlobalTheme';

/* For wrapping an entire Page */
export const PageWrapper = styled.div<{
  background?: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  ${optional('background', 'background', theme.colours.neutral.light)}
  position: relative;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
  ${breakpoint('mobile')`
    max-width: 350px;
  `}
  
  ${breakpoint('tablet')`
    max-width: 900px;
  `}

`;
