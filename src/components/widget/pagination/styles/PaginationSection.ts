import styled from 'styled-components';
import { optional } from 'utils/styledComponents';

export const PaginationSectionWrapper = styled.div<{ alignSelf?: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;

  ${optional('alignSelf', 'align-self')}
`;

export const BoxWithArrow = styled.div<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  ${({ disabled }) => (disabled ? '' : 'cursor: pointer;')}
`;
