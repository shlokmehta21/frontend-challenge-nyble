import React from 'react';

export type PdfViewPropsType = {
  stringData: string;
  className?: string;
};

const PdfView = ({ stringData, className }: PdfViewPropsType) => {
  const src = `data:application/pdf;base64,${stringData}`;

  return <object data={src} type="application/pdf" title="Lease" className={className}></object>;
};

export default PdfView;
