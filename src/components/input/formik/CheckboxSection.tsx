import React, { FC } from 'react';
import { FormikProps, connect, getIn } from 'formik';

import {
  CheckboxSectionWrapper,
  Checkbox,
  Error,
  ErrorPadding,
  RowWrapper,
} from './styles/CheckboxSection';
import Spacer from 'components/position/Spacer';

/*
  name is the formik field name
  text is the explanation text
  styleOverrides are styles that we wish to override. Should not be needed in most cases as text box styling should be consistent everyw
*/
type CheckboxSectionOuterPropsType = {
  name: string;
  children?: React.ReactNode;
  size?: number;
  noErrorPadding?: boolean;
};

/* This is type of actual props passed to TextInputSection after injection from connect */
type CheckboxSectionPropsType = CheckboxSectionOuterPropsType & { formik: FormikProps<any> };

/* 
  CheckboxSection includes a checkbox, text explanation and error
*/
const CheckboxSection: FC<CheckboxSectionOuterPropsType> = ({
  name,
  children,
  size = 16,
  noErrorPadding = false,
  formik,
}: CheckboxSectionPropsType) => {
  const error = getIn(formik.errors, name);
  const touched = getIn(formik.touched, name);

  return (
    <CheckboxSectionWrapper>
      <RowWrapper>
        <Checkbox type="checkbox" name={name} width={size} height={size} />
        <Spacer width={12} />
        {children && children}
      </RowWrapper>
      {error && touched && <Error>{error}</Error>}
      {!(error && touched) && !noErrorPadding && <ErrorPadding />}
    </CheckboxSectionWrapper>
  );
};

export default connect<CheckboxSectionOuterPropsType>(CheckboxSection);
