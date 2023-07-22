/*
  Mixin to optionally add in a css field if it exists in props
*/
export const optional = (propName: string, cssFieldName: string, defaultField: any = '') => {
  return (props: any) =>
    props[propName]
      ? `${cssFieldName}: ${props[propName]};`
      : defaultField == ''
      ? ''
      : `${cssFieldName}: ${defaultField};`;
};
