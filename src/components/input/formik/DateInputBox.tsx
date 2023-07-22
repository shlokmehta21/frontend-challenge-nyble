import React, { useEffect } from 'react';
import { FieldValidator, useField, useFormikContext } from 'formik';

import { DatePicker } from './styles/DateInputBox';

/*
  name is the formik field name
  styleOverrides are styles that we wish to override. Should not be needed in most cases as text box styling should be consistent everywhere
*/
type DateInputBoxPropsType = {
  name: string;
  validate?: FieldValidator;
  placeholder?: string;
  styleOverrides?: { [key: string]: string };
  pastDatesOnly?: boolean;
  filterDateFunction?: (date: Date) => boolean;
  minDate?: Date;
  maxDate?: Date;
  forcedValue?: Date;
  onValueUpdate?: (value: Date) => void;
};

/* 
  DateInputBox is a simple input box for date input
*/
const DateInputBox = (props: DateInputBoxPropsType) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta, helpers] = useField(props);

  useEffect(() => {
    if (props.forcedValue !== null && props.forcedValue !== undefined) {
      helpers.setValue(props.forcedValue);
    }
  }, [props.forcedValue]);

  return (
    <DatePicker
      {...field}
      {...props}
      placeholderText={props.placeholder}
      selected={(field.value && new Date(field.value)) || null}
      onChange={(val: Date) => {
        setFieldValue(field.name, val);
        props.onValueUpdate && props.onValueUpdate(val);
      }}
      styleOverrides={props.styleOverrides ? props.styleOverrides : {}}
      peekNextMonth
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      minDate={props.minDate}
      maxDate={props.maxDate ? props.maxDate : props.pastDatesOnly ? new Date() : null}
      filterDate={props.filterDateFunction}
    />
  );
};

export default DateInputBox;
