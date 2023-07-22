import styled from 'styled-components';

export const OptionalDisplayWrapper = styled.div<{ condition: boolean }>`
  all: inherit;
  ${({ condition }) => (condition ? '' : 'display: none;')};
`;
