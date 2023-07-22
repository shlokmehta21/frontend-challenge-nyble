import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { optional } from 'utils/styledComponents';

export const SidebarButtonWrapper = styled.div<{ justifyContent?: string }>`
  display: flex;
  width: 100%;
  ${optional('justifyContent', 'justify-content', 'center')}

  ${breakpoint('mobile', 'tablet')`
    ${({ theme }) => `
      height: ${theme.sizing.sidebar.mobile.itemHeight}px;
    `}
   `}

  ${breakpoint('mobile', 'desktop')`
    ${({ theme }) => `
      height: ${theme.sizing.sidebar.tablet.itemHeight}px;
    `}
  `}

  ${breakpoint('desktop')`
    ${({ theme }) => `
      height: ${theme.sizing.sidebar.desktop.itemHeight}px;
    `}
  `}

  :hover {
    cursor: pointer;
    opacity: 0.85;
  }
`;

export const SidebarPrimaryButtonWrapper = styled.div<{
  justifyContent?: string;
  marginBottom?: string;
  borderColor?: string;
  background?: string;
}>`
  display: flex;
  width: 75%;
  border: solid 1px ${({ theme }) => theme.colours.primary};
  border-radius: 5px;
  height: 50px;
  background-color: transparent;
  align-self: center;

  background: ${({ theme }) => theme.colours.primary};

  ${optional('marginBottom', 'margin-bottom')}

  ${optional('background', 'background-color')}

  filter: drop-shadow(4px 4px 2px ${({ theme }) => theme.colours.grey});

  color: ${({ theme }) => theme.colours.white};
  ${optional('justifyContent', 'justify-content', 'center')}

  ${breakpoint('mobile', 'tablet')`
    ${({ theme }) => `
      height: ${theme.sizing.sidebar.mobile.itemHeight}px;
    `}
   `}

  ${breakpoint('mobile', 'desktop')`
    ${({ theme }) => `
      height: ${theme.sizing.sidebar.tablet.itemHeight}px;
    `}
  `}

  :hover {
    cursor: pointer;
    opacity: 0.85;
    background-color: ${({ theme }) => theme.colours.brown};
  }
`;
