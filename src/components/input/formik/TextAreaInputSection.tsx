import React from 'react';
import { getIn, FieldValidator, useFormikContext } from 'formik';

import { TextAreaInputSectionWrapper, Error, ErrorPadding } from './styles/TextAreaInputSection';
import Spacer from 'components/position/Spacer';
import TextAreaInputBox from './TextAreaInputBox';

/*
  name is the formik field name
*/
type TextInputSectionPropsType = {
  name: string;
  placeholder?: string;
  width?: string;
  height?: string;
  rows?: number;
  cols?: number;
  maxLength?: number;
  validate?: FieldValidator;
};

/* 
  TextInputSection includes a textbox and error
*/
const TextAreaInputSection = ({
  name,
  placeholder,
  width = '100%',
  height = '100%',
  validate,
  rows = 8,
  cols = 40,
  maxLength = 500,
}: TextInputSectionPropsType) => {
  const formikContext = useFormikContext();
  const error = getIn(formikContext.errors, name);
  const touched = getIn(formikContext.touched, name);

  return (
    <TextAreaInputSectionWrapper width={width} height={height}>
      <TextAreaInputBox
        name={name}
        placeholder={placeholder}
        validate={validate}
        rows={rows}
        cols={cols}
        maxLength={maxLength}
      />
      <Spacer height={4} />
      {error && touched && <Error>{error}</Error>}
      {!(error && touched) && <ErrorPadding />}
    </TextAreaInputSectionWrapper>
  );
};

export default TextAreaInputSection;
