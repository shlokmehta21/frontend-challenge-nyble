import React, { useState } from 'react';

type HoverParentPropsType = {
  children: (isHovered: boolean) => React.ReactNode;
};

/*
  The hover parent exposes the hover state of the parent to its children
*/

const HoverParent = ({ children }: HoverParentPropsType) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'inherit',
        alignItems: 'inherit',
        justifyContent: 'inherit',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children(isHovered)}
    </div>
  );
};

export default HoverParent;
