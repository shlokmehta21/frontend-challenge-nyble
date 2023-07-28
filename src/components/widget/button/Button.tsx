import React, { FC } from "react";
import { ButtonWrapper } from "./styles/Button";
import { MediumHeading, MediumText, SmallHeading } from "Mixins/Font";
import { SpinnerWrapper } from "components/styling/common";

interface ButtonProps {
  backgroundColor?: string;
  color?: string;
  padding?: string;
  border?: string;
  borderColor?: string;
  height?: string;
  width?: string;
  text?: string;
  alignSelf?: string;
  marginTop?: string;
  key?: string;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  font?: string;
}

const Button: FC<ButtonProps> = ({
  backgroundColor,
  color,
  padding,
  border,
  borderColor,
  text,
  alignSelf,
  marginTop,
  onClick,
  loading,
  disabled,
  font,
}) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      backgroundColor={backgroundColor}
      color={color}
      padding={padding}
      border={border}
      borderColor={borderColor}
      alignSelf={alignSelf}
      marginTop={marginTop}
      disabled={disabled}
    >
      {loading === true ? (
        <SpinnerWrapper />
      ) : font === "medium" ? (
        <MediumHeading color={color}>{text}</MediumHeading>
      ) : (
        <SmallHeading color={color}>{text}</SmallHeading>
      )}
    </ButtonWrapper>
  );
};

export default Button;
