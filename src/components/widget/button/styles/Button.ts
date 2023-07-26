import styled, { css } from "styled-components";
import breakpoint from "styled-components-breakpoint";

interface ButtonProps {
  backgroundColor?: string;
  color?: string;
  padding?: string;
  border?: string;
  borderColor?: string;
  height?: string;
  width?: string;
  alignSelf?: string;
  marginTop?: string;
  disabled?: boolean;
}

export const ButtonWrapper = styled.div<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  cursor: pointer;
  padding: ${(props: ButtonProps) => props.padding || "0.5rem 4rem"};
  background-color: ${(props: ButtonProps) => props.backgroundColor || "#fff"};
  color: ${(props: ButtonProps) => props.color || "#000"};
  border: ${(props: ButtonProps) => props.border};
  border-color: ${(props: ButtonProps) => props.borderColor};
  align-self: ${(props: ButtonProps) => props.alignSelf};
  margin-top: ${(props: ButtonProps) => props.marginTop};
  border-radius: 35px;

  /* Added styles for the disabled state */
  ${(props: ButtonProps) =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    `}
`;
