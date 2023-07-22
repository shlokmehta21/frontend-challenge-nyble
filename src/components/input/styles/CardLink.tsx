import { BoxShadow } from 'Mixins/Font';
import styled from 'styled-components';
import { optional } from 'utils/styledComponents';

export const CardLinkWrapper = styled.div<{ background?: string; marginBottom?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 24px 32px;
  cursor: pointer;
  max-width: 600px;
  border-radius: 10px;
  background-color: ${({ theme, background }) => (background ? background : theme.colours.white)};
  ${optional('marginBottom', 'margin-bottom', '12px')}

  border: 0.5px solid ${({ theme }) => theme.colours.lightBlueGrey};
  ${BoxShadow}
`;

export const CardLinkRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
`;

export const ArrowWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 16px;
`;
