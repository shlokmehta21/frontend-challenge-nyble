import { R12 } from 'Mixins/Font';
import styled from 'styled-components';
import { optional } from 'utils/styledComponents';

export const ProvinceInputSectionWrapper = styled.div<{ width?: string }>`
  display: flex;
  flex-direction: column;
  ${optional('width', 'width')}
`;

export const Error = styled.div`
  ${R12}
  color: ${({ theme }) => theme.colours.error};
  align-self: flex-start;
`;

export const ErrorPadding = styled.div`
  height: 12px;
`;
