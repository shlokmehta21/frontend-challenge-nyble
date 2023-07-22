import { HeavyShadow } from 'Mixins/Font';
import styled from 'styled-components';
import { optional } from 'utils/styledComponents';

export const DropdownBodyWrapper = styled.div<{ width: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  border-radius: 2px;
  top: calc(100% + 8px);
  right: 0;
  ${optional('width', 'width', 'fit-content')}
  white-space: nowrap;
  background-color: ${({ theme }) => theme.colours.white};
  overflow: none;

  ${HeavyShadow};
`;
