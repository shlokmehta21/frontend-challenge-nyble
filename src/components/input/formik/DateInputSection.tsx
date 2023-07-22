import React, { FC } from 'react';
import { FormikProps, connect, getIn, FieldValidator } from 'formik';

import DateInputBox from 'components/input/formik/DateInputBox';
import { DateInputSectionWrapper, Error, ErrorPadding } from './styles/DateInputSection';

/*
  name is the formik field name
  styleOverrides are styles that we wish to override. Should not be needed in most cases as text box styling should be consistent everywhere
*/
type DateInputSectionOuterPropsType = {
  name: string;
  placeholder?: string;
  width?: string;
  pastDatesOnly?: boolean;
  validate?: FieldValidator;
  inputBoxStyleOverrides?: { [key: string]: string };
  filterDateFunction?: (date: Date) => boolean;
  minDate?: Date;
  maxDate?: Date;
  forcedValue?: Date;
  onValueUpdate?: (value: Date) => void;
};

/* This is type of actual props passed to DateInputSection after injection from connect */
type DateInputSectionPropsType = DateInputSectionOuterPropsType & { formik: FormikProps<any> };

/* 
  DateInputSection includes a date selection box and error
*/
const DateInputSection: FC<DateInputSectionOuterPropsType> = ({
  name,
  placeholder,
  width = '100%',
  pastDatesOnly,
  validate,
  inputBoxStyleOverrides,
  formik,
  filterDateFunction,
  minDate,
  maxDate,
  forcedValue,
  onValueUpdate,
}: DateInputSectionPropsType) => {
  const error = getIn(formik.errors, name);
  const touched = getIn(formik.touched, name);

  return (
    <DateInputSectionWrapper width={width}>
      <DateInputBox
        name={name}
        placeholder={placeholder}
        validate={validate}
        styleOverrides={inputBoxStyleOverrides ? inputBoxStyleOverrides : {}}
        pastDatesOnly={pastDatesOnly}
        filterDateFunction={filterDateFunction}
        minDate={minDate}
        maxDate={maxDate}
        forcedValue={forcedValue}
        onValueUpdate={onValueUpdate}
      />
      {error && touched && <Error>{error}</Error>}
      {!(error && touched) && <ErrorPadding />}
    </DateInputSectionWrapper>
  );
};

export default connect<DateInputSectionOuterPropsType>(DateInputSection);
