import { ChevronDown } from 'react-feather';
import styled from 'styled-components';

import { Hover } from 'Mixins/Animation';
import { BoxShadow } from 'components/styling/Ui';
import { optional } from 'utils/styledComponents';

const HEADER_HEIGHT = 64;

export const ContainerWrapper = styled.div<{ margin: string; width: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${BoxShadow}
  margin: ${({ margin }) => margin};
  border-radius: 4px;
  width: ${({ width }) => width};
`;

export const HeaderWrapper = styled.div<{
  headerBorder: boolean;
  paddingRight?: string;
  background?: string;
  cursor?: string;
}>`
  display: flex;
  align-content: center;
  justify-content: space-between;
  border-bottom: ${({ headerBorder, theme }) =>
    headerBorder ? `2px solid ${theme.colours.lightBlueGrey}` : 'none'};
  border-radius: 4px 4px 0 0;
  ${optional('paddingRight', 'padding-right')}
  ${optional('cursor', 'cursor')}
  ${optional('background', 'background')}
`;

export const HeaderChevronBox = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  border-top-right-radius: 4px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colours.darkGrey};
  ${Hover()}
`;

export const Chevron = styled(ChevronDown)<{ open: boolean }>`
  ${({ open }) => (open ? '' : 'transform: rotate(180deg);')}
  transition: all .3s ease-in-out;
`;

export const ContentWrapper = styled.div`
  background: ${({ theme }) => theme.colours.white};
  border-radius: 0 0 4px 4px;
`;
