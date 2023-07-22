import React, { FC } from 'react';

import { connect, FormikProps } from 'formik';
import Button, { ButtonPropsType } from 'components/input/button/Button';
import { useTheme } from 'styled-components';

type SubmitButtonPropsType = ButtonPropsType & { formik: FormikProps<any> };

/* This exists because we want to button to show loading when formik is validating*/
const SubmitButton: FC<ButtonPropsType> = ({ formik, ...props }: SubmitButtonPropsType) => {
  const theme = useTheme();
  return (
    <Button type="submit" width="350px" {...props} loading={formik.isValidating || props.loading} />
  );
};

export default connect(SubmitButton);
