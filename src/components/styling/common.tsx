import theme from 'GlobalTheme';
import styled from 'styled-components';
import { optional } from 'utils/styledComponents';

export const Column = styled.div<{
  flex?: string;
  alignItems?: string;
  justifyContent?: string;
  width?: string;
  maxWidth?: string;
  padding?: string;
  marginBottom?: string;
}>`
  display: flex;
  flex-direction: column;

  ${optional('flex', 'flex', 1)};
  ${optional('alignItems', 'align-items', 'flex-start')};
  ${optional('justifyContent', 'justify-content', 'center')};
  ${optional('maxWidth', 'max-width', '300px')};
  ${optional('width', 'width', '100%')};
  ${optional('padding', 'padding')};
  ${optional('marginBottom', 'margin-bottom')};
`;

export const Row = styled.div<{
  flex?: string;
  alignItems?: string;
  justifyContent?: string;
  width?: string;
  maxWidth?: string;
  maxHeight?: string;
  padding?: string;
  marginBottom?: string;
}>`
  display: flex;
  flex-direction: row;

  ${optional('flex', 'flex', 1)};
  ${optional('alignItems', 'align-items', 'center')};
  ${optional('justifyContent', 'justify-content', 'center')};
  ${optional('maxWidth', 'max-width', '300px')};
  ${optional('maxHeight', 'max-height')};
  ${optional('width', 'width', '100%')};
  ${optional('padding', 'padding', '10px')};
  ${optional('marginBottom', 'margin-bottom', '12px')};
`;
