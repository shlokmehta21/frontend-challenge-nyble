import React from 'react';
import { getIn, useFormikContext } from 'formik';

import { ProvinceInputSectionWrapper, Error, ErrorPadding } from './styles/ProvinceInputSection';
import Spacer from 'components/position/Spacer';
import ProvinceInputBox from './ProvinceInputBox';

/*
  name is the formik field name
*/
type ProvinceInputSectionPropsType = {
  name: string;
  country: string;
  width?: string;
  placeholder?: string;
  forcedValue?: string;
};

/* 
  ProvinceInputSection includes a dropdown and error
*/
const ProvinceInputSection = ({
  name,
  country,
  width,
  placeholder,
  forcedValue,
}: ProvinceInputSectionPropsType) => {
  const formikContext = useFormikContext();
  const error = getIn(formikContext.errors, name);
  const touched = getIn(formikContext.touched, name);

  return (
    <ProvinceInputSectionWrapper width={width ? width : undefined}>
      <ProvinceInputBox
        forcedValue={forcedValue}
        name={name}
        country={country}
        width="100%"
        placeholder={placeholder}
      />
      <Spacer height={4} />
      {error && touched && <Error>{error}</Error>}
      {!(error && touched) && <ErrorPadding />}
    </ProvinceInputSectionWrapper>
  );
};

export default ProvinceInputSection;
