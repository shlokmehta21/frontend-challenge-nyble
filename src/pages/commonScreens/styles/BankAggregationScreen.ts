import styled from 'styled-components';

export const FadeContainer1 = styled.div`
  display: flex;
  opacity: 0.7;
  margin-bottom: 8px;
`;

export const FadeContainer2 = styled.div`
  display: flex;
  opacity: 0.4;
  margin-bottom: 8px;
`;
export const IframeContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

export const IFrame = styled.iframe`
  width: 100%;
  border: none;
  background: ${({ theme }) => theme.colours.white};
  height: 65vh;
  position: relative;
`;
