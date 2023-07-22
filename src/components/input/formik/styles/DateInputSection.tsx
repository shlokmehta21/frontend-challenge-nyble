import { R12 } from 'Mixins/Font';
import styled from 'styled-components';
import { optional } from 'utils/styledComponents';
import { DEFAULT_INPUT_BOX_WIDTH } from '../constants';

export const DateInputSectionWrapper = styled.div<{ width?: string }>`
  display: flex;
  flex-direction: column;
  ${optional('width', 'width', `${DEFAULT_INPUT_BOX_WIDTH}px`)}
  max-width: 350px;
`;

export const Error = styled.div`
  ${R12}
  color: ${({ theme }) => theme.colours.error};
`;

export const ErrorPadding = styled.div`
  height: 12px;
`;
