import React from 'react';
import { useTheme } from 'styled-components';

const DropdownDivider = () => {
  const theme = useTheme();

  return (
    <div
      style={{
        borderBottom: `1px solid ${theme.colours.grey}`,
        width: '90%',
        margin: '2px 0',
      }}
    />
  );
};

export default DropdownDivider;
