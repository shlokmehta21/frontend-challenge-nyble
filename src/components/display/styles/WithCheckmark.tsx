import styled from 'styled-components';
import { optional } from 'utils/styledComponents';

export const WithCheckmarkWrapper = styled.div<{
  marginBottom?: string;
  alignItems?: string;
  maxWidth?: string;
}>`
  display: flex;
  width: 100%;

  ${optional('marginBottom', 'margin-bottom')}
  ${optional('alignItems', 'align-items', 'center')}
  ${optional('alignItems', 'justify-content', 'center')}
  ${optional('maxWidth', 'max-width', '350px')}
`;
