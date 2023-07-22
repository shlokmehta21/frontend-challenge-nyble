import React, { useEffect } from 'react';
import { RegionDropdown } from 'react-country-region-selector';
import { useField } from 'formik';
import {
  ProvinceInputBoxWrapper,
  InputWrapper,
  DropdownArrowWrapper,
} from './styles/ProvinceInputBox';
import DropdownArrow from 'images/DropdownArrow';

const RecognizedShortforms: { [key: string]: string } = {
  on: 'Ontario',
  ab: 'Alberta',
  bc: 'British Columbia',
  mb: 'Manitoba',
  nl: 'Newfoundland and Labrador',
  pe: 'Prince Edward Island',
  ns: 'Nova Scotia',
  nb: 'New Brunswick',
  qc: 'Quebec',
  sk: 'Saskatchewan',
  yt: 'Yukon',
  nt: 'Northwest Territories',
  nu: 'Nunavut',
};

/*
  name is the formik field name
*/
type ProvinceInputBoxPropsType = {
  name: string;
  country: string;
  width?: string;
  placeholder?: string;
  forcedValue?: string;
};

/* 
  ProvinceInputBox is a simple input box for province, given a country
*/
const ProvinceInputBox = (props: ProvinceInputBoxPropsType) => {
  const [field, meta, helpers] = useField(props);

  useEffect(() => {
    if (field.value && RecognizedShortforms[field.value.toLowerCase()]) {
      helpers.setValue(RecognizedShortforms[field.value.toLowerCase()]);
    }
  }, [field.value]);

  useEffect(() => {
    if (props.forcedValue && props.forcedValue !== '') {
      helpers.setValue(props.forcedValue);
    }
  }, [props.forcedValue]);

  return (
    <ProvinceInputBoxWrapper width={props.width}>
      <InputWrapper placeholderShowing={field.value == ''}>
        <RegionDropdown
          defaultOptionLabel={props.placeholder ? props.placeholder : 'Province*'}
          country={props.country}
          value={field.value}
          onChange={(value: any) => helpers.setValue(value)}
        />
      </InputWrapper>
      <DropdownArrowWrapper>
        <DropdownArrow />
      </DropdownArrowWrapper>
    </ProvinceInputBoxWrapper>
  );
};

export default ProvinceInputBox;
