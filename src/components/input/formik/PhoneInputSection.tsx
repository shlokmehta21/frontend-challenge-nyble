import React, { FC } from 'react';
import { FormikProps, connect, getIn, FieldValidator } from 'formik';

import { PhoneInputSectionWrapper, Error, ErrorPadding } from './styles/PhoneInputSection';
import Spacer from 'components/position/Spacer';
import PhoneInputBox from './PhoneInputBox';

/*
  name is the formik field name
*/
type PhoneInputSectionOuterPropsType = {
  name: string;
  placeholder?: string;
  width?: string;
  validate?: FieldValidator;
};

/* This is type of actual props passed to PhoneInputSection after injection from connect */
type PhoneInputSectionPropsType = PhoneInputSectionOuterPropsType & { formik: FormikProps<any> };

/* 
  PhoneInputSection includes a textbox and error
*/
const PhoneInputSection: FC<PhoneInputSectionOuterPropsType> = ({
  name,
  placeholder,
  width,
  validate,
  formik,
}: PhoneInputSectionPropsType) => {
  const error = getIn(formik.errors, name);
  const touched = getIn(formik.touched, name);

  return (
    <PhoneInputSectionWrapper width={width ? width : undefined}>
      <PhoneInputBox name={name} placeholder={placeholder} validate={validate} />
      <Spacer height={4} />
      {error && touched && <Error>{error}</Error>}
      {!(error && touched) && <ErrorPadding />}
    </PhoneInputSectionWrapper>
  );
};

export default connect<PhoneInputSectionOuterPropsType>(PhoneInputSection);
