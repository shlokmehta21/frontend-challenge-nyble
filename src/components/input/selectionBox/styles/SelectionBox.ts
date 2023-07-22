import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { optional } from 'utils/styledComponents';

export const SelectionBoxWrapper = styled.div<{
  vertical?: boolean;
  width?: string;
  height?: string;
  selected: boolean;
  marginBottom?: string;
  background?: string;
  borderColor?: string;
  marginRight?: string;
  disabled?: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  ${optional('marginRight', 'margin-right')}

  border-radius: 10px;
  ${({ disabled }) => `cursor: ${disabled ? 'default' : 'pointer'};`}

  margin: 5px 0px 0px 0px;
  ${optional('marginBottom', 'margin-bottom')}
  ${({ theme, background }) =>
    `background: ${background ? background : theme.colours.lightBlueGrey};`}

  ${({ theme, borderColor }) =>
    `outline 3px solid ${borderColor ? borderColor : theme.colours.lightBlueGrey};`}

  ${({ theme, selected, disabled }) =>
    !selected &&
    !disabled &&
    breakpoint('tablet')`:hover {
      outline: 3px solid ${theme.newColours.green};
    }`}

  ${({ theme, selected }) =>
    selected &&
    `
    outline: 3px solid ${theme.newColours.green};
    background: ${theme.newColours.green2};
  `}

  ${({ vertical, width, height }) =>
    vertical
      ? `
        ${width ? `width: ${width};` : ''}
        ${height ? `height: ${height};` : ''}
        `
      : `
        ${width ? `width: ${width};` : 'width: 100%; min-width: 280px;'}
        ${height ? `height: ${height};` : 'min-height: 45px;'}
        `}
`;

export const SelectionBoxCircle = styled.div<{ vertical?: boolean; selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 50%;

  margin-left: 12px;
  margin-right: 12px;
  margin-bottom: 12px;
  margin-top: 12px;

  ${({ vertical }) =>
    !vertical &&
    `
      position: absolute;
      margin-bottom: auto;
      margin-top: auto;
  `}

  ${({ vertical }) =>
    vertical
      ? `
    width: 20px;
    height: 20px;
  `
      : `
    width: 30px;
    height: 30px;
  `};
`;

export const ChildrenWrapper = styled.div<{
  vertical?: boolean;
  center?: boolean;
  contentPadding?: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ center }) => center && 'justify-content: center'};
  ${optional('contentPadding', 'padding')}

  flex-grow: 1;
`;
