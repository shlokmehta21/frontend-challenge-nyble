import styled from 'styled-components';
import { optional } from 'utils/styledComponents';

export const LabelAndContentTableWrapper = styled.table<{ marginBottom?: string; width?: string }>`
  ${optional('marginBottom', 'margin-bottom')}
  ${optional('width', 'width')}
  border-collapse: collapse;
`;

// For use with LabelAndContentTable
export const LabelAndContentTableRow = styled.tr<{
  height?: string;
  borderBottom?: string;
  borderTop?: string;
}>`
  ${optional('height', 'height')}
  ${optional('borderBottom', 'border-bottom')}
  ${optional('borderTop', 'border-top')}
`;

// For use with LabelAndContentTable
export const LabelAndContentTableCell = styled.td<{
  height?: string;
  textAlign?: string;
  paddingVertical?: string;
  paddingLeft?: string;
  paddingRight?: string;
}>`
  word-break: break-word;

  ${optional('height', 'height', '48px')}
  ${optional('textAlign', 'text-align', 'center')}

  ${optional('paddingVertical', 'padding-top')}
  ${optional('paddingVertical', 'padding-bottom')}
  ${optional('paddingLeft', 'padding-left')}
  ${optional('paddingRight', 'padding-right')}
`;
