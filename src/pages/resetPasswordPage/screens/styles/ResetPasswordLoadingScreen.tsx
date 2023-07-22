import styled from 'styled-components';
import { FormWrapper } from 'components/styling/Form';

export const ResetPasswordLoadingScreenWrapper = styled.div`
  ${({ theme }) => FormWrapper({ theme, noTopPadding: true })}
  height: 100%;
  justify-content: center;
`;
