import styled from 'styled-components';
import { optional } from 'utils/styledComponents';

export const ProgressBarSectionWrapper = styled.div<{
  width: string;
  height: string;
  marginRight?: string;
}>`
  ${optional('marginRight', 'margin-right')}
  height: ${({ height }) => height};
  width: ${({ width }) => width};

  background: ${({ theme }) => theme.newColours.grey1};
  border-radius: 1px;
`;

export const SectionFill = styled.div<{ filled: boolean; color: string }>`
  height: 100%;
  width: ${({ filled }) => (filled ? '100%' : '0%')};
  background: ${({ color, theme }) => (color ? color : theme.newColours.green)};

  transition: width 0.5s ease-in;
  border-radius: 20px;
`;
