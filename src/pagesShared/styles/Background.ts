import { PageWidth } from 'mixins/Position';
import styled from 'styled-components';

export const PageBackgroundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.colours.neutral.light};
  ${PageWidth}
`;
