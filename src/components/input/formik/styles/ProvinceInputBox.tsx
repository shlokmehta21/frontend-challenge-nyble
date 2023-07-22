import { R14 } from 'Mixins/Font';
import { T3 } from 'Mixins/NewFont';
import React from 'react';
import styled from 'styled-components';
import { optional } from 'utils/styledComponents';
import { DEFAULT_INPUT_BOX_HEIGHT } from '../constants';

// Did some gymnastics here to get styled-component styles onto the
// input box styles

// A styled component extending this styles the region drowdown
const RegionDropdownWrapper = ({ className, children, ...props }: any) =>
  React.Children.map(children, (child) =>
    React.cloneElement(child, { classes: className, ...props })
  );

export const InputWrapper = styled(RegionDropdownWrapper)<{ placeholderShowing: boolean }>`
  ${T3}
  font-weight: 600;
  border: 0px solid ${({ theme }) => theme.newColours.blue3};
  width: 100%;
  min-width: 280px;
  height: ${DEFAULT_INPUT_BOX_HEIGHT}px;
  border-radius: 10px;
  padding: 8px 4px;
  -webkit-appearance: none;

  text-align: center;
  justify-content: center;
  background: ${({ theme }) => theme.colours.lightBlueGrey};

  ${({ placeholderShowing, theme }) =>
    placeholderShowing ? `color: ${theme.colours.blue3}; font-weight: 600;` : ''}

  :focus {
    outline: none;
  }
`;

export const ProvinceInputBoxWrapper = styled.div<{ width?: string }>`
  display: flex;
  position: relative;
  ${optional('width', 'width')}
`;

export const DropdownArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  height: 100%;
  right: 8px;
`;
