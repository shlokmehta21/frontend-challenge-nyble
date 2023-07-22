import { R12 } from 'Mixins/Font';
import styled from 'styled-components';
import { optional } from 'utils/styledComponents';

export const TextAreaInputSectionWrapper = styled.div<{ width?: string; height?: string }>`
  display: flex;
  flex-direction: column;
  ${optional('width', 'width', '100%')}
`;

export const Error = styled.div`
  ${R12}
  color: ${({ theme }) => theme.colours.error};
  white-space: pre-wrap;
`;

export const ErrorPadding = styled.div`
  height: 12px;
`;
