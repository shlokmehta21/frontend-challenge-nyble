import { Hover } from 'Mixins/Animation';
import styled from 'styled-components';

const ITEM_HEIGHT = 28;

export const DropdownItemWrapper = styled.div`
  outline: none;
  border: none;
  display: flex;
  cursor: pointer;
  width: 100%;

  padding: 4px 12px;
  border-radius: 0;

  &:first-child {
    border-radius: 2px 2px 0 0;
    padding-top: 12px;
  }

  &:last-child {
    border-radius: 0 0 2px 2px;
    padding-bottom: 12px;
  }

  &:only-child {
    border-radius: 2px;
    padding: 12px 12px;
  }

  ${Hover(true)}
`;
