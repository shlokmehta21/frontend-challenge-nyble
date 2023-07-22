import styled from 'styled-components';
import React from 'react';
import PhoneInput from 'react-phone-input-2';
import { T3 } from 'Mixins/NewFont';

// Did some gymnastics here to get styled-component styles onto the
// input box styles

// A styled component extending this styles the input box itself
const InputBoxInner = ({ className, containerClassName, ...props }: any) => (
  <PhoneInput
    {...props}
    inputClass={className ? className : undefined}
    containerClass={containerClassName ? containerClassName : undefined}
  />
);

// A styled component extending this styles the input box wrapper
// This must wrap either a InputBoxInner or a PhoneInput itself
const PhoneInputOuterWrapper = ({ className, children, ...props }: any) =>
  React.Children.map(children, (child) =>
    React.cloneElement(child, { containerClassName: className, ...props })
  );

export const InputBox = styled(InputBoxInner)`
  width: 100% !important;
`;

export const InputBoxOuterWrapper = styled(PhoneInputOuterWrapper)`
  min-height: 35px;
`;
