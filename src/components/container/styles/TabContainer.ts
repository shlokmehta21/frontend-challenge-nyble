import { Hover } from 'Mixins/Animation';
import { BoxShadow, BottomBoxShadow } from 'Mixins/Font';
import styled from 'styled-components';

export const ContainerWrapper = styled.div<{ borderRadius: boolean }>`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colours.white};
  top: 0;
`;

export const TabsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: sticky;
  top: 0;
`;

export const Tab = styled.button<{
  first: boolean;
  last: boolean;
  selected: boolean;
  borderRadius: boolean;
  minWidth: number;
}>`
  border: none;
  display: flex;
  min-width: ${({ minWidth }) => (minWidth ? `${minWidth}px` : 0)};
  flex: 1;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 5px 2px;
  border-radius: ${({ first, last, selected, borderRadius }) => {
    if (!selected || !borderRadius) {
      return '0';
    }
    if (first && last) {
      return '10px 10px 0 0';
    }
    if (first) {
      return '10px 0 0 0';
    }
    if (last) {
      return '0 10px 0 0';
    }
    return '0';
  }};
  border-top: ${({ selected, theme }) =>
    selected ? `5px solid ${theme.colours.primary}` : '0px solid transparent'};
  background: ${({ selected, theme }) => (selected ? theme.colours.primary : theme.colours.white)};
  color: ${({ selected, theme }) => (selected ? theme.colours.primary : theme.colours.white)};
  ${({ selected }) => !selected && Hover()}
`;

export const ContentContainer = styled.div<{ padding: string }>`
  width: 100%;
  height: 95%;
  boder: 0px;
  top: 0;
  border: ${({ theme }) => `2px solid ${theme.colours.primary}`};
  border-radius: 0 0 10px 10px;
`;
