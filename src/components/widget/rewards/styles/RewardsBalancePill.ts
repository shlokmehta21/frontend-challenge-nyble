import styled from 'styled-components';
import { H1, H2, H3, T1, T2, T3, H4 } from 'Mixins/NewFont';

import { PageContentWidth, PageWidth } from 'Mixins/Position';
import { optional } from 'utils/styledComponents';
import breakpoint from 'styled-components-breakpoint';

export const PointsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  height: 100%;
  max-height: 30px;
  overflow-y: hidden;
  background: ${({ theme }) => theme.colours.lightBlueGrey};
  border-radius: 35px;
  padding: 5px 15px;
`;

export const PointsFont = styled.div<{
  marginBottom?: string;
  marginLeft?: string;
  textAlign?: string;
  maxWidth?: string;
  alignSelf?: string;
  color?: string;

  bold?: boolean;
}>`
  ${({ bold }) => T2({ bold })}
  color: ${({ theme }) => theme.newColours.primary1};
  display: inline-block;
  ${optional('marginBottom', 'margin-bottom')}
  ${optional('marginLeft', 'margin-left')}
  ${optional('textAlign', 'text-align')}
  ${optional('maxWidth', 'max-width')}
  ${optional('alignSelf', 'align-self')}
  ${optional('color', 'color')}

  ${({ bold }) => breakpoint('mobile', 'tablet')`
    ${H4({ mobile: true })}
  `}
`;
