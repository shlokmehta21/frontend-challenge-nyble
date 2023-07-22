import styled from 'styled-components';
import { optional } from 'utils/styledComponents';

/* 
  Row of content that displays as either row or stack, depending on space
  Used in conjunction with FlowElementWrapper
*/
export const FlowRow = styled.div<{ marginBottom?: string; maxWidth?: string; width?: string }>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-flow: row wrap;

  ${optional('marginBottom', 'margin-bottom')}
  ${optional('maxWidth', 'max-width', '350px')}
  ${optional('width', 'width', '100%')}
`;

/* 
  Wrapper for one element in a FlowRow
*/
export const FlowElementWrapper = styled.div<{ width?: string }>`
  width: calc(${({ width }) => (width ? width : '50%')} - 6px);
  @media screen and (min-width: 0px) and (max-width: 550px) {
    width: 100%;
  }

  @media screen and (min-width: 600px) {
    :first-child {
      margin-right: 8px;
    }
  }
`;
