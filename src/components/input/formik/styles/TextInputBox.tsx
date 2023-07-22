import { H3, T2, T3 } from 'Mixins/NewFont';
import { HTMLProps } from 'react';
import styled from 'styled-components';
import { optional } from 'utils/styledComponents';
import { DEFAULT_INPUT_BOX_HEIGHT } from '../constants';

export const InputBox = styled.input<
  { styleOverrides: { [key: string]: string } } & HTMLProps<HTMLInputElement>
>`
  ${optional('height', 'height', `${DEFAULT_INPUT_BOX_HEIGHT}px`)}
  ${optional('width', 'width')}
  ${T3({ mobile: true })};

  font-weight: 600;
  margin: 2px;
  border-radius: 10px;
  border: 0px solid ${({ theme }) => theme.colours.lightBlueGrey};
  padding: 8px 12px;
  color: ${({ theme }) => theme.colours.dark};
  background-color: ${({ theme }) => theme.colours.lightBlueGrey};

  ::placeholder {
    color: ${({ theme }) => theme.colours.darkBlueGrey};
  }

  :focus {
    outline: none;
  }
`;
