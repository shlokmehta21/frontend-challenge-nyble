import React, { useState } from 'react';
import { FieldValidator, useField } from 'formik';
import Select, { StylesConfig } from 'react-select';
import { useTheme } from 'styled-components';
import { FormBodyDict } from 'components/styling/Form';
import { DEFAULT_INPUT_BOX_HEIGHT, DEFAULT_INPUT_BOX_WIDTH } from './constants';
import { T3 } from 'Mixins/NewFont';

export type OptionWithLabel = {
  value: string | number;
  label: string;
};

export type OptionIndexWithLabel = {
  value: number;
  label: string;
};

/*
  name is the formik field name
*/
type DropdownInputBoxPropsType = {
  name: string;
  placeholder?: string;
  options: Array<OptionWithLabel>;
  validate?: FieldValidator;
  noneOption?: string;
  defaultSelection?: number;
  onChangeListener?: (value: string | number) => void;
};

/* 
  DropdownInputBox is a dropdown input box
*/
const DropdownInputBox = (props: DropdownInputBoxPropsType) => {
  const [field, meta, helpers] = useField(props);
  const [selectedIndex, setSelectedIndex] = useState(
    props.defaultSelection ? props.defaultSelection : 0
  );
  const theme = useTheme();

  const onChange = (data: OptionIndexWithLabel) => {
    setSelectedIndex(data.value);
    helpers.setValue(data.value == 0 ? '' : props.options[data.value - 1].value);
    if (props.onChangeListener) {
      props.onChangeListener(data.value == 0 ? '' : props.options[data.value - 1].value);
    }
  };

  const allOptions = [
    { value: 0, label: props.noneOption },
    ...props.options.map((value, index) => ({
      value: index + 1,
      label: value.label,
    })),
  ];

  const displayOptions = props.noneOption ? allOptions : allOptions.slice(1);

  const colourStyles: StylesConfig<OptionIndexWithLabel> = {
    control: (styles) => ({
      ...styles,
      backgroundColor: `${theme.colours.lightBlueGrey}`,
      color: `${theme.newColours.blue3}`,
      border: `0px solid ${theme.newColours.blue3}`,
      borderRadius: '10px',
      minWidth: '280px',

      fontWeight: 600,
      height: `${DEFAULT_INPUT_BOX_HEIGHT}px`,
      width: `${DEFAULT_INPUT_BOX_WIDTH}px`,
      boxShadow: 'none',
      textAlign: 'center',
      alignContent: 'center',
      justifyContent: 'center',
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        ...FormBodyDict(theme),
        fontWeight: 600,
        fontSize: 14,
        height: `${DEFAULT_INPUT_BOX_HEIGHT}px`,
        width: `${DEFAULT_INPUT_BOX_WIDTH}px`,
        fontFamily: `'Poppins', sans-serif`,
        alignSelf: 'center',
        cursor: isDisabled ? 'not-allowed' : 'default',
      };
    },
    input: (styles) => ({ ...styles, ...FormBodyDict(theme) }),
    placeholder: (styles) => ({
      ...styles,
      ...FormBodyDict(theme),
      color: theme.newColours.blue3,
      fontWeight: 600,
      fontSize: 14,

      fontFamily: `'Poppins', sans-serif`,
      alignSelf: 'center',
    }),
    valueContainer: (styles) => ({
      ...styles,
      padding: '8px 5px',
      color: theme.newColours.primary1,
      fontWeight: 600,
      fontSize: 14,

      width: `${DEFAULT_INPUT_BOX_WIDTH}px`,
      fontFamily: `'Poppins', sans-serif`,
      alignSelf: 'center',
    }),
    indicatorSeparator: (styles) => ({ display: 'none' }),
    singleValue: (styles) => ({ ...styles, ...FormBodyDict(theme) }),
  };

  return (
    <Select
      options={displayOptions}
      value={selectedIndex == 0 ? null : allOptions[selectedIndex]}
      onChange={onChange}
      placeholder={props.placeholder}
      styles={colourStyles}
    />
  );
};

export default DropdownInputBox;
