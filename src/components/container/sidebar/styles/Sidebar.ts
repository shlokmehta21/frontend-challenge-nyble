import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { optional } from 'utils/styledComponents';

export const SidebarWrapper = styled.div<{ isOpen: boolean; background?: string }>`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0);
  height: 100%;
  align-items: center;

  ${optional('background', 'background')}

  ${breakpoint('mobile', 'tablet')`
    width: ${({ theme, isOpen }) => (isOpen ? theme.sizing.sidebar.mobile.width : 0)}px;
  `}

  ${breakpoint('tablet', 'desktop')`
    width: ${({ theme, isOpen }) => (isOpen ? theme.sizing.sidebar.tablet.width : 0)}px;
  `}

  ${breakpoint('desktop')`
    width: ${({ theme, isOpen }) => (isOpen ? theme.sizing.sidebar.desktop.width : 0)}px;
  `}

  transition: width 0.5s ease-in;
`;
