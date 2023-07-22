import { R14 } from 'Mixins/Font';
import { HTMLProps } from 'react';
import styled from 'styled-components';
import { optional } from 'utils/styledComponents';

export const InputBox = styled.textarea<HTMLProps<HTMLTextAreaElement>>`
  ${optional('height', 'height')}
  ${optional('width', 'width')}
  ${R14}
  border: 1px solid ${({ theme }) => theme.colours.grey};
  border-radius: 5px;

  ::placeholder {
    color: ${({ theme }) => theme.colours.grey};
  }

  :focus {
    outline: none;
  }

  resize: none;
`;
