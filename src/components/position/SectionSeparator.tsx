import React, { ComponentProps } from 'react';
import theme from 'GlobalTheme';

type SectionSeparatorPropsType = {
  left?: string;
  right?: string;
  color?: string;
};

export const SectionSeparator = ({ left, right, color }: SectionSeparatorPropsType) => {
  return (
    <div
      style={{
        border: `0.5px solid ${color || theme.colours.primary}`,
        width: '100%',
        background: `${color || theme.colours.primary}`,
        marginLeft: left,
        marginRight: right,
        marginTop: '5px',
        marginBottom: '5px',
      }}
    />
  );
};
