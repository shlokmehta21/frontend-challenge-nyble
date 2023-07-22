import React from 'react';
import { OptionalDisplayWrapper } from './styles/OptionalDisplay';

export type OptionalDisplayPropsType = {
  condition: boolean;
  children: React.ReactNode;
};

/* For optionally displaying a component while keeping it mounted */
const OptionalDisplay = ({ condition, children }: OptionalDisplayPropsType) => {
  return <OptionalDisplayWrapper condition={condition}>{children}</OptionalDisplayWrapper>;
};

export default OptionalDisplay;
