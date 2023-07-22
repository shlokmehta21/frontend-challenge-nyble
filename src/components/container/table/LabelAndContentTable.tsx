import React from 'react';
import { LabelAndContentTableWrapper } from './styles/LabelAndContentTable';

export type LabelAndContentTablePropsType = {
  col1Width: string | number;
  col2Width: string | number;
  children: React.ReactNodeArray | React.ReactNode;
  marginBottom?: string;
  tableWidth?: string;
};

/* For use when we have a bunch of "X: asdf" columns and we want to line them up */
const LabelAndContentTable = ({
  col1Width,
  col2Width,
  children,
  marginBottom,
  tableWidth,
}: LabelAndContentTablePropsType) => {
  return (
    <LabelAndContentTableWrapper marginBottom={marginBottom} width={tableWidth}>
      <colgroup>
        <col span={1} width={col1Width} />
        <col span={1} width={col2Width} />
      </colgroup>
      <tbody>{children}</tbody>
    </LabelAndContentTableWrapper>
  );
};

export default LabelAndContentTable;
