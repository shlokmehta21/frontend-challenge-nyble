import styled from 'styled-components';
import { optional } from 'utils/styledComponents';

export const ProgressWrapper = styled.div<{
  color?: string;
  background?: string;
  maxWidth?: string;
  height?: string;
}>`
  display: flex;
  flex: 1;
  align-self: center;
  width: 100%;

  ${optional('maxWidth', 'max-width', '300px')}
  ${optional('height', 'height', '10px')}

  progress[value] {
    width: 100%;
    appearance: none;

    ::-webkit-progress-bar {
      ${optional('height', 'height', '10px')}
      background-color: ${({ background, theme }) =>
        background ? background : theme.newColours.grey3};
      border-radius: 10px;
    }
    ::-webkit-progress-value {
      ${optional('height', 'height', '10px')}
      background-color: ${({ color, theme }) => (color ? color : theme.newColours.slate)};
      border-radius: 10px;
    }
  }
`;
