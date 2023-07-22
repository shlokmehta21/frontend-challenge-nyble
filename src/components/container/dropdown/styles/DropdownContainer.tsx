import styled from 'styled-components';
import { optional } from 'utils/styledComponents';

export const DropdownContainerWrapper = styled.div<{
  zIndex?: number;
}>`
  ${optional('zIndex', 'z-index')}
  margin-left: 4px;
  width: fit-content;
  white-space: nowrap;
  cursor: pointer;
  position: relative;
  user-select: none;
`;
