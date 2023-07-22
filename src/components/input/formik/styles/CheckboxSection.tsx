import { Field } from 'formik';
import { R12 } from 'Mixins/Font';
import styled from 'styled-components';

export const CheckboxSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Checkbox = styled(Field)<{ width: number; height: number }>`
  width: ${({ width }) => width}px;
  height ${({ height }) => height}px;
  flex-shrink: 0;
   
`;

export const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Error = styled.div`
  ${R12}
  color: ${({ theme }) => theme.colours.error};
`;

export const ErrorPadding = styled.div`
  height: 12px;
`;
