import React from 'react';
import { Check } from 'react-feather';
import { useTheme } from 'styled-components';
import { ChildrenWrapper, SelectionBoxCircle, SelectionBoxWrapper } from './styles/SelectionBox';

export type SelectionBoxPropsType = {
  children: React.ReactNode;
  onClick?: () => void;
  vertical?: boolean; // Default horizontal
  width?: string;
  height?: string;
  selected: boolean;
  center?: boolean;
  marginBottom?: string;
  marginRight?: string;
  contentPadding?: string;
  background?: string;
  borderColor?: string;
  disabled?: boolean;
};

const SelectionBox = ({
  children,
  onClick,
  vertical,
  width,
  height,
  selected,
  center,
  marginBottom,
  marginRight,
  contentPadding,
  background,
  borderColor,
  disabled,
}: SelectionBoxPropsType) => {
  const theme = useTheme();
  return (
    <SelectionBoxWrapper
      onClick={onClick}
      vertical={vertical}
      width={width}
      height={height}
      selected={selected}
      marginBottom={marginBottom}
      marginRight={marginRight}
      background={background}
      borderColor={borderColor}
      disabled={disabled}
    >
      <ChildrenWrapper center={center} contentPadding={contentPadding} vertical={vertical}>
        {children}
      </ChildrenWrapper>
      {/* <SelectionBoxCircle vertical={vertical} selected={selected}>
        {selected && <Check color={theme.newColours.green} />}
      </SelectionBoxCircle> */}
    </SelectionBoxWrapper>
  );
};

export default SelectionBox;
