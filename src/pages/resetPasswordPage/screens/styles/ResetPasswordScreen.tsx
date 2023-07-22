import styled from 'styled-components';
import { Form } from 'formik';
import { B18, B20 } from 'Mixins/Font';

import { FormWrapper } from 'components/styling/Form';

export const ResetPasswordScreenWrapper = styled.div`
  ${FormWrapper}
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
