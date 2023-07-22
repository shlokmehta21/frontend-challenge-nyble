import styled from 'styled-components';
import RawDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import { R14 } from 'Mixins/Font';
import { optional } from 'utils/styledComponents';
import { DEFAULT_INPUT_BOX_HEIGHT, DEFAULT_INPUT_BOX_WIDTH } from '../constants';
import { T3 } from 'Mixins/NewFont';

export const DatePicker = styled(RawDatePicker)<
  {
    styleOverrides: { [key: string]: string };
    height?: number;
    width?: number;
  } & ReactDatePickerProps
>`
  ${optional('height', 'height', `${DEFAULT_INPUT_BOX_HEIGHT}px`)}
  ${optional('width', 'width', '100%')}
  ${T3};
  font-weight: 600;
  border-radius: 10px;
  padding: 8px 12px;
  border: 0px solid ${({ theme }) => theme.colours.lightBlueGrey};
  width: ${DEFAULT_INPUT_BOX_WIDTH}px;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: ${({ theme }) => theme.newColours.blue3};
  background-color: ${({ theme }) => theme.colours.lightBlueGrey};

  ::placeholder {
    color: ${({ theme }) => theme.colours.darkBlueGrey};
    font-weight: 600;
  }

  :focus {
    outline: none;
    transform: scale(1.01);
    transition: ease-in-out;
    transition-duration: 0.2s;
  }
`;
