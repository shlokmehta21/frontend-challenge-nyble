import styled from 'styled-components';
import { optional } from 'utils/styledComponents';

export const SliderWrapper = styled.div<{ width?: string }>`
  ${optional('width', 'width')}
`;
