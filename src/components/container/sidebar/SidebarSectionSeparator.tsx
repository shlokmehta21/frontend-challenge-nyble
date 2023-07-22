import React from 'react';
import { useTheme } from 'styled-components';

const SidebarSectionSeparator = () => {
  const theme = useTheme();
  return (
    <div
      style={{
        border: `0.5px solid ${theme.colours.primary}`,
        background: theme.colours.primary,
        marginLeft: '30px',
        marginRight: '30px',
      }}
    />
  );
};

export default SidebarSectionSeparator;
