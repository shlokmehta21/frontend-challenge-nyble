import styled from 'styled-components';
import { optional } from 'utils/styledComponents';

export const DiscreteProgressBarWrapper = styled.div<{ width?: string }>`
  display: flex;

  ${optional('width', 'width', '400px')}
`;
