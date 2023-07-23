import React, { useState } from 'react';
import { PageBackgroundWrapper } from './styles/Background';
import { PageWrapper } from './styles/Wrappers';
import Spacer from 'components/position/Spacer';
import Navbar from 'components/widget/navbar/Navbar';

export type PageBackgroundPropsType = {
  children: any;
};

const PageBackground = ({ children }: PageBackgroundPropsType) => {
  return (
    <PageBackgroundWrapper>
      <PageWrapper>
        <Spacer height={100} />
        {children}
      </PageWrapper>
      <Navbar />
    </PageBackgroundWrapper>
  );
};

export default PageBackground;
