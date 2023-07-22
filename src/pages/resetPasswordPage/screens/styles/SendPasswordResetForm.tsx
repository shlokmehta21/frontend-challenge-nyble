import styled from 'styled-components';
import { B18, B20 } from 'Mixins/Font';

import { Form } from 'formik';
import { FormWrapper } from 'components/styling/Form';

export const SendPasswordResetFormWrapper = styled.div`
  ${FormWrapper}
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
`;
