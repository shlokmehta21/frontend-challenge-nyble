
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { optional } from 'utils/styledComponents';

export const HomePageWrapper = styled.div`
  flex: 1;
  flex-direction: column;
  height: 100%;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
`;

export const HomePageTabWrapper = styled.div<{
  someOption?: string
  // You can add options here
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({theme}) => theme.colours.white};
  border-radius: 10px;
  min-height: 60%;

  ${breakpoint('mobile')`
    width: 100%;
    max-width: 350px;
    padding: 24px 24px;
  `}

  ${breakpoint('tablet')`
    width: 100%;
    max-width: 900px;
    padding: 48px 24px;
  `}

`