import styled from 'styled-components';

export const FigLogoWrapper = styled.div<{ size: number }>`
  ${({ size }) => `
    width: ${size}px;
    height: ${size}px;
  `}
  background-color: ${({ theme }) => theme.colours.primary};
  border-radius: 10px;
`;
