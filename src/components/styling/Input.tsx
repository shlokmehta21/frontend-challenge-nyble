import { R12 } from 'Mixins/Font';
import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  ${R12}
  color: ${({ theme }) => theme.colours.error};
`;

export const ErrorPadding = styled.div`
  height: 12px;
`;
