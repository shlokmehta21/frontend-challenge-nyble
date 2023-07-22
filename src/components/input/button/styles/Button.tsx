import { ComponentProps } from 'react';
import styled from 'styled-components';

import { BoxShadow } from 'Mixins/Font';
import { Hover } from 'Mixins/Animation';
import { optional } from 'utils/styledComponents';

export const ButtonWrapper = styled.button<
  {
    disabled: boolean;
    hasShadow?: boolean;
    height: any;
    margin?: any;
    padding?: any;
    width?: any;
    borderColor?: string;
    color?: string;
    round?: boolean;
    background?: string;
    alignSelf?: string;
  } & ComponentProps<'button'>
>`
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  display: flex;
  ${optional('alignSelf', 'align-self')}
  align-items: center;
  justify-content: center;
  text-align: center;
  border: ${({ borderColor }) => (borderColor ? `2px solid ${borderColor}` : 'none')};
  border-radius: ${({ round }) => (round ? '1000px' : '5px')};
  ${optional('padding', 'padding')}
  color: ${({ disabled, theme }) => (disabled ? 'gray' : theme.colours.black)};
  height: ${({ height }) => height};
  ${optional('margin', 'margin')}
  background: ${({ disabled, theme, background }) =>
    disabled ? 'gray' : background ? background : theme.newColours.primary1};
  ${({ hasShadow }) => hasShadow && BoxShadow}
  ${optional('width', 'width', 'auto')}

  ${Hover()}



  :focus {
    color: ${({ theme }) => theme.newColours.green};
  }
`;

export const ButtonChildren = styled.div`
  display: flex;
  justify-content: center;
  width: max-content;
`;
