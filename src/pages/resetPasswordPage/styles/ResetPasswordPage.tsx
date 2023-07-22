import styled from 'styled-components';
import { Form } from 'formik';
import { HeightWithNavbar, PageWidth } from 'Mixins/Position';
import { FormWrapper } from 'components/styling/Form';

export const ResetPasswordPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${HeightWithNavbar}
  ${PageWidth}
`;

export const FormContentWrapper = styled.div`
  ${FormWrapper}
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 32px;
  width: 200px;
`;
