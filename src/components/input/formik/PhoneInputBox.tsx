import React, { ComponentPropsWithoutRef, useCallback } from 'react';
import { FieldValidator, useField, useFormikContext } from 'formik';
import { InputBox, InputBoxOuterWrapper } from './styles/PhoneInputBox';
import { useTheme } from 'styled-components';
import { DEFAULT_INPUT_BOX_WIDTH } from './constants';

/*
  name is the formik field name
*/
type PhoneInputBoxPropsType = {
  name: string;
  placeholder?: string;
  validate?: FieldValidator;
};

/* 
  PhoneInputBox is a simple input box for text input
*/
const PhoneInputBox = (props: PhoneInputBoxPropsType) => {
  const { handleSubmit } = useFormikContext();
  const theme = useTheme();
  const [field, meta, helpers] = useField(props);

  const handleChange = useCallback(
    (value: any) => {
      helpers.setValue(`+${value}`);
    },
    [helpers]
  );

  return (
    <InputBoxOuterWrapper>
      <InputBox
        country={'ca'}
        onlyCountries={['ca']}
        enableSearch={true}
        disableSearchIcon={true}
        countryCodeEditable={false}
        value={field.value}
        onChange={handleChange}
        placeholder={props.placeholder ? props.placeholder : ''}
        onEnterKeyPress={handleSubmit}
        containerStyle={{
          border: `0px solid ${theme.newColours.blue3}`,
          background: theme.colours.lightBlueGrey,
          borderRadius: '10px',
          minWidth: '330px',
          width: `${DEFAULT_INPUT_BOX_WIDTH - 20}px`,
        }}
        inputStyle={{
          background: 'transparent',
          border: 'none',
          fontFamily: `'Poppins', sans-serif`,
          fontWeight: 600,
          color: theme.newColours.primary1,
          fontSize: 12,
          paddingLeft: '15px',
          marginLeft: '35px',
        }}
        dropdownStyle={{
          background: theme.colours.lightBlueGrey,
        }}
        searchStyle={{
          background: theme.colours.lightBlueGrey,
        }}
        buttonStyle={{
          background: theme.colours.lightBlueGrey,
          border: 'none',
        }}
      />
    </InputBoxOuterWrapper>
  );
};

export default PhoneInputBox;
