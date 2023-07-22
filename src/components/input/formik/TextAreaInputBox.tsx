import React, { ComponentPropsWithoutRef } from 'react';
import { FieldValidator, useField } from 'formik';

import { InputBox } from 'components/input/formik/styles/TextAreaInputBox';

/*
  name is the formik field name
*/
type TextAreaInputBoxPropsType = {
  name: string;
  validate?: FieldValidator;
} & ComponentPropsWithoutRef<'textarea'>;

/* 
  TextAreaInputBox is a big input box for large text input
*/
const TextAreaInputBox = (props: TextAreaInputBoxPropsType) => {
  const [field, meta, helpers] = useField(props);

  return <InputBox {...field} {...props} />;
};

export default TextAreaInputBox;
