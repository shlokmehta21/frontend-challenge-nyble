import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const InnerWrapper = styled.div<{ useAllSpace?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
  background-color: transparent;

  width: 100%;
  ${({ useAllSpace }) => (useAllSpace ? 'height: 100%;' : '')}
  position: relative;
`;

export const BackButtonPadding = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 40px;
  width: 100%;
`;

export const LogoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 100%;
`;

export const AbsoluteBackButtonWrapper = styled.div<{}>`
  position: absolute;
  cursor: pointer;
  z-index: 0;

  ${breakpoint('mobile', 'tablet')`
    top: 20px;
    left: 12px;
  `}

  ${breakpoint('tablet', 'desktop')`
    top: 32px;
    left: 24px;
  `}

  ${breakpoint('desktop')`
    top: 32px;
    left: 32px;
  `}
`;

export const ChildrenWrapper = styled.div<{ innerWidth?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;

  flex-grow: 1;
  width: ${({ innerWidth }) => (innerWidth ? innerWidth : '100%')};
  position: relative;
`;
