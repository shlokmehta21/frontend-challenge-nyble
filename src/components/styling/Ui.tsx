import styled from 'styled-components';
import { optional } from 'utils/styledComponents';

export const BoxShadow = `
  box-shadow: 0px 3px 7px rgba(236, 237, 237, 0.4),
  0px 0px 5px rgba(142, 147, 148, 0.2);
`;

export const BoxShadowHeavy = `
  box-shadow: 0 8px 8px -4px #cdcdcd;
`;

export const Card = styled.div<{
  paddingVertical?: string;
  paddingHorizontal?: string;
  marginBottom?: string;
  marginTop?: string;
  cursor?: string;
  justifyContent?: string;
  flexDirection?: string;
  background?: string;
  maxWidth?: string;
}>`
  display: flex;
  align-items: center;

  border-radius: 4px;
  width: 100%;
  background-color: white;
  ${BoxShadow}

  ${optional('cursor', 'cursor')}

  ${optional('paddingVertical', 'padding-top', '24px')}
  ${optional('paddingVertical', 'padding-bottom', '24px')}
  ${optional('paddingHorizontal', 'padding-left', '16px')}
  ${optional('paddingHorizontal', 'padding-right', '16px')}

  ${optional('justifyContent', 'justify-content')}
  ${optional('marginBottom', 'margin-bottom')}
  ${optional('marginTop', 'margin-top')}
  ${optional('flexDirection', 'flex-direction', 'row')}

  ${optional('background', 'background')}
  ${optional('maxWidth', 'max-width')}
`;

export const MetricContentCard = styled.div<{
  margin?: string;
  padding?: string;
  background?: string;
  width?: string;
}>`
  ${BoxShadowHeavy}

  border: 1px solid #e6e6e6;
  border-radius: 12px;
  background: white;
  ${optional('background', 'background')}
  ${optional('padding', 'padding')}
  ${optional('margin', 'margin')}
  ${optional('width', 'width')}
`;

export const TableCard = styled.div<{
  margin?: string;
  padding?: string;
  background?: string;
  width?: string;
}>`
  ${BoxShadowHeavy}
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  max-width: 1400px;
  padding: 20px;
  border: 1px solid #e6e6e6;
  border-radius: 12px;
  background: white;
  margin-bottom: 10px;

  ${optional('background', 'background')}
  ${optional('padding', 'padding')}
  ${optional('margin', 'margin')}
  ${optional('width', 'width')}
`;
