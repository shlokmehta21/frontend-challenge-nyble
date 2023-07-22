import React, { FC } from 'react';
import { FormikProps, connect, getIn, FieldValidator } from 'formik';

import TextInputBox from 'components/input/formik/TextInputBox';
import { TextInputSectionWrapper, Error, ErrorPadding } from './styles/TextInputSection';
import Spacer from 'components/position/Spacer';

/*
  name is the formik field name
  styleOverrides are styles that we wish to override. Should not be needed in most cases as text box styling should be consistent everywhere
*/
type TextInputSectionOuterPropsType = {
  name: string;
  placeholder?: string;
  width?: string;
  validate?: FieldValidator;
  inputBoxStyleOverrides?: { [key: string]: string };
  forceLower?: boolean;
  forceUpper?: boolean;
  disabled?: boolean;
  forcedValue?: string;
  centered?: boolean;
  isPassword?: boolean;
  isNumber?: boolean;
  hidden?: boolean; // Control if this is being displayed
};

/* This is type of actual props passed to TextInputSection after injection from connect */
type TextInputSectionPropsType = TextInputSectionOuterPropsType & { formik: FormikProps<any> };

/* 
  TextInputSection includes a textbox and error
*/
const TextInputSection: FC<TextInputSectionOuterPropsType> = ({
  name,
  placeholder,
  width = '100%',
  validate,
  inputBoxStyleOverrides,
  formik,
  forceLower,
  forceUpper,
  disabled,
  forcedValue,
  centered,
  isPassword = false,
  isNumber = false,
  hidden,
}: TextInputSectionPropsType) => {
  const error = getIn(formik.errors, name);
  const touched = getIn(formik.touched, name);

  return (
    <TextInputSectionWrapper width={width} centered={centered} hidden={hidden}>
      <TextInputBox
        name={name}
        placeholder={placeholder}
        validate={validate}
        styleOverrides={inputBoxStyleOverrides ? inputBoxStyleOverrides : {}}
        type={isPassword ? 'password' : isNumber ? 'number' : undefined}
        forceLower={forceLower}
        forceUpper={forceUpper}
        disabled={disabled}
        forcedValue={forcedValue}
      />
      {error && touched && (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Spacer width={15} />
          <Error>{error}</Error>
        </div>
      )}
      {!(error && touched) && <ErrorPadding />}
    </TextInputSectionWrapper>
  );
};

export default connect<TextInputSectionOuterPropsType>(TextInputSection);
