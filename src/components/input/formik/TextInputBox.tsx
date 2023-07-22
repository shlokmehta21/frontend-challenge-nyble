import React, { ComponentPropsWithoutRef, useEffect } from 'react';
import { FieldValidator, useField } from 'formik';

import { InputBox } from 'components/input/formik/styles/TextInputBox';

/*
  name is the formik field name
  styleOverrides are styles that we wish to override. Should not be needed in most cases as text box styling should be consistent everywhere
*/
type TextInputBoxPropsType = {
  name: string;
  validate?: FieldValidator;
  styleOverrides?: { [key: string]: string };
  forceLower?: boolean;
  forceUpper?: boolean;
  forcedValue?: string;
  disabled?: boolean;
  onValueUpdate?: (value: string) => void;
} & ComponentPropsWithoutRef<'input'>;

/* 
  TextInputBox is a simple input box for text input
*/
const TextInputBox = (props: TextInputBoxPropsType) => {
  const [field, meta, helpers] = useField(props);

  const onChange = (event: any) => {
    if (props.forceLower) {
      event.target.value = event.target.value.toLowerCase();
    }
    if (props.forceUpper) {
      event.target.value = event.target.value.toUpperCase();
    }
    field.onChange(event);
    props.onValueUpdate && props.onValueUpdate(event.target.value);
  };

  useEffect(() => {
    if (props.forcedValue !== null && props.forcedValue !== undefined) {
      helpers.setValue(props.forcedValue);
    }
  }, [props.forcedValue]);

  return (
    <InputBox
      {...field}
      disabled={props.disabled ? props.disabled : false}
      onChange={onChange}
      {...props}
      styleOverrides={props.styleOverrides ? props.styleOverrides : {}}
    />
  );
};

export default TextInputBox;
