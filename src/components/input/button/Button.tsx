import React, { ComponentProps } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import { useTheme } from 'styled-components';
import { ButtonChildren, ButtonWrapper } from './styles/Button';

export type ButtonPropsType = {
  borderColor?: string;
  color?: string;
  hasShadow?: boolean;
  height?: any;
  loading?: boolean;
  margin?: any;
  padding?: any;
  width?: any;
  round?: boolean;
  type?: string;
  background?: string;
  alignSelf?: string;
  className?: string;
} & ComponentProps<'button'>;

const Button = ({
  children,
  color,
  borderColor,
  width = '350px',
  margin = '0',
  padding = '18px 36px',
  onClick = () => null,
  height = '52px',
  hasShadow = true,
  loading = false,
  disabled = false,
  round = true,
  type = 'button',
  background,
  alignSelf,
  className,
}: ButtonPropsType) => {
  return (
    <ButtonWrapper
      height={height}
      disabled={disabled}
      color={color}
      borderColor={borderColor}
      hasShadow={hasShadow}
      margin={margin}
      padding={padding}
      width={width}
      background={background}
      type={type}
      round={round}
      alignSelf={alignSelf}
      onClick={disabled ? () => null : onClick}
      onMouseDown={(e) => e.preventDefault()}
      className={className}
    >
      {loading ? (
        <PulseLoader size={12} color={'white'} />
      ) : (
        <ButtonChildren>{children}</ButtonChildren>
      )}
    </ButtonWrapper>
  );
};

export default Button;
