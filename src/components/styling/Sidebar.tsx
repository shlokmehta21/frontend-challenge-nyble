import styled from 'styled-components';
import { B18, R18, R20, B20, R24 } from 'Mixins/Font';
import { optional } from 'utils/styledComponents';
import breakpoint from 'styled-components-breakpoint';

export const SidebarTitle = styled.div<{
  marginTop?: string;
  marginBottom?: string;
  color?: string;
}>`
  ${B18}
  color: ${({ theme }) => theme.colours.white};
  display: flex;
  align-items: center;
  justify-content: center;

  ${breakpoint('mobile', 'tablet')`
    padding-left: ${({ theme }) => theme.sizing.sidebar.mobile.paddingLeft}px;
  `}

  ${optional('marginTop', 'margin-top')}
  ${optional('marginBottom', 'margin-bottom')}
  ${optional('color', 'color')}
`;

export const SidebarMenuItemText = styled.div<{ color?: string }>`
  ${R18}
  color: ${({ theme }) => theme.colours.white};
  ${optional('color', 'color')}
`;
