import theme from "GlobalTheme";
import styled, { keyframes } from "styled-components";
import { optional } from "utils/styledComponents";

export const Column = styled.div<{
  flex?: string;
  alignItems?: string;
  justifyContent?: string;
  width?: string;
  maxWidth?: string;
  padding?: string;
  marginBottom?: string;
}>`
  display: flex;
  flex-direction: column;

  ${optional("flex", "flex", 1)};
  ${optional("alignItems", "align-items", "flex-start")};
  ${optional("justifyContent", "justify-content", "center")};
  ${optional("maxWidth", "max-width", "300px")};
  ${optional("width", "width", "100%")};
  ${optional("padding", "padding")};
  ${optional("marginBottom", "margin-bottom")};
`;

export const Row = styled.div<{
  flex?: string;
  alignItems?: string;
  justifyContent?: string;
  width?: string;
  maxWidth?: string;
  maxHeight?: string;
  padding?: string;
  marginBottom?: string;
  gap?: string;
  alignSelf?: string;
}>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${optional("flex", "flex", 1)};
  ${optional("alignItems", "align-items", "center")};
  ${optional("justifyContent", "justify-content", "center")};
  ${optional("maxWidth", "max-width", "300px")};
  ${optional("maxHeight", "max-height")};
  ${optional("width", "width", "100%")};
  ${optional("padding", "padding", "10px")};
  ${optional("marginBottom", "margin-bottom", "12px")};
  ${optional("gap", "gap")};
  ${optional("alignSelf", "align-self")};
`;

// Keyframe animation for the spinner
const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Styled component for the spinner
export const SpinnerWrapper = styled.div`
  display: inline-block;
  border: 3px solid #f3f3f3;
  border-top: 3px solid ${theme.colours.neutral.dark};
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: ${spinAnimation} 1s linear infinite;
`;
