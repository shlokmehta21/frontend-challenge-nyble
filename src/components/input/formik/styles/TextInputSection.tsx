import { R12 } from 'Mixins/Font';
import { T2, T3 } from 'Mixins/NewFont';
import styled from 'styled-components';
import { optional } from 'utils/styledComponents';

export const TextInputSectionWrapper = styled.div<{
  width?: string;
  centered?: boolean;
  hidden?: boolean;
}>`
  display: flex;
  flex-direction: column;
  ${optional('width', 'width', '100%')}
  ${({ hidden }) => hidden && 'display: none;'}

  ${({ centered }) =>
    centered &&
    `
  position: relative;
  `}
`;

export const Error = styled.div`
  ${T3}
  font-weight: 300;
  color: ${({ theme }) => theme.colours.error};
  white-space: pre-wrap;
`;

export const ErrorPadding = styled.div`
  height: 12px;
`;
