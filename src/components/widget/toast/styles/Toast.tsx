import { R14 } from 'Mixins/Font';
import styled from 'styled-components';

export const ToastWrapper = styled.div`
  display: flex;
  ${R14}
  color: ${({ theme }) => theme.newColours.primary1};
  width: 100%;
  overflow-wrap: break-word;
`;
