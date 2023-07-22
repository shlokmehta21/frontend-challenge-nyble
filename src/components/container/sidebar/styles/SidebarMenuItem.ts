import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { optional } from 'utils/styledComponents';

export const SidebarItemWrapper = styled.div<{ background?: string }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  ${optional('background', 'background-color')}

  ${breakpoint('mobile', 'tablet')`
    ${({ theme }) => `
      height: ${theme.sizing.sidebar.mobile.itemHeight}px;
      padding-left: ${theme.sizing.sidebar.mobile.paddingLeft}px
    `}
   `}

  ${breakpoint('tablet', 'desktop')`
    ${({ theme }) => `
      height: ${theme.sizing.sidebar.tablet.itemHeight}px;
      padding-left: ${theme.sizing.sidebar.tablet.paddingLeft}px
    `}
  `}

  ${breakpoint('desktop')`
    ${({ theme }) => `
      height: ${theme.sizing.sidebar.desktop.itemHeight}px;
      padding-left: ${theme.sizing.sidebar.desktop.paddingLeft}px
    `}
  `}

  :hover {
    cursor: pointer;
    opacity: 0.85;
  }
`;
