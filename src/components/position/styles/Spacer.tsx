import styled from 'styled-components';

export const SpacerDiv = styled.div<{ width?: number; height?: number }>`
  width: ${({ width }) => (width || width === 0 ? `${width}px` : '100%')};
  height: ${({ height }) => (height || height === 0 ? `${height}px` : '100%')};
  flex-shrink: 0;
`;
