import React from 'react';
import { FormBody, FormDisclaimer } from 'components/styling/Form';
import { useTheme } from 'styled-components';
import { BoxWithArrow, PaginationSectionWrapper } from './styles/PaginationSection';
import { ChevronLeft, ChevronRight } from 'react-feather';
import Spacer from 'components/position/Spacer';

export type PaginationSectionPropsType = {
  onNextPage: () => void;
  onPreviousPage: () => void;
  page: number;
  totalPages: number;
  totalRecords: number;

  alignSelf?: string;
};

const PaginationSection = ({
  onNextPage,
  onPreviousPage,
  page,
  totalPages,
  totalRecords,
  alignSelf,
}: PaginationSectionPropsType) => {
  const theme = useTheme();
  return (
    <PaginationSectionWrapper alignSelf={alignSelf}>
      <BoxWithArrow disabled={page == 1} onClick={page == 1 ? undefined : onPreviousPage}>
        <ChevronLeft stroke={theme.colours.grey} />
        <FormBody>Previous</FormBody>
      </BoxWithArrow>
      <Spacer width={12} />
      <FormBody>
        Page {page} out of {totalPages}
      </FormBody>
      <Spacer width={12} />
      <BoxWithArrow
        disabled={page == totalPages}
        onClick={page == totalPages ? undefined : onNextPage}
      >
        <FormBody>Next</FormBody>
        <ChevronRight stroke={theme.colours.grey} />
      </BoxWithArrow>
    </PaginationSectionWrapper>
  );
};

export default PaginationSection;
