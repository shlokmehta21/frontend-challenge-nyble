import React from 'react';
import { getIn, useFormikContext } from 'formik';

import { DropdownInputSectionWrapper, Error, ErrorPadding } from './styles/DropdownInputSection';
import Spacer from 'components/position/Spacer';
import DropdownInputBox, { OptionWithLabel } from './DropdownInputBox';

/*
  name is the formik field name
*/
type DropdownInputSectionPropsType = {
  name: string;
  placeholder?: string;
  options: Array<OptionWithLabel>;
  onChangeListener?: (value: string | number) => void;
  width?: string;
  noneOption?: string;
  defaultSelection?: number;
  centered?: boolean; // Is this component being centered? If yes add adjustment to account for error padding
};

/* 
  DropdownInputSection includes a dropdown and error
*/
const DropdownInputSection = ({
  name,
  placeholder,
  options,
  onChangeListener,
  width,
  noneOption,
  defaultSelection,
  centered,
}: DropdownInputSectionPropsType) => {
  const formikContext = useFormikContext();
  const error = getIn(formikContext.errors, name);
  const touched = getIn(formikContext.touched, name);

  return (
    <DropdownInputSectionWrapper width={width ? width : undefined} centered={centered}>
      <DropdownInputBox
        name={name}
        options={options}
        placeholder={placeholder}
        noneOption={noneOption}
        defaultSelection={defaultSelection}
        onChangeListener={onChangeListener}
      />
      <Spacer height={4} />
      {error && touched && <Error>{error}</Error>}
      {!(error && touched) && <ErrorPadding />}
    </DropdownInputSectionWrapper>
  );
};

export default DropdownInputSection;
