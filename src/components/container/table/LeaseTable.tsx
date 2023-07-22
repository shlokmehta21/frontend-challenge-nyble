import { FormBody, FormBodyBold, FormHeader, FormSubHeader } from 'components/styling/Form';
import {
  LeaseDetailRow,
  LeaseDetailsSection,
  StyledTable,
  TableCell,
  TableHeader,
  TableRow,
} from './styles/LeaseTable';
import React from 'react';
import { useTheme } from 'styled-components';
import { centToDollarStr } from 'utils/number';
import LabelAndContentTable from 'components/container/table/LabelAndContentTable';
import {
  LabelAndContentTableCell,
  LabelAndContentTableRow,
} from 'components/container/table/styles/LabelAndContentTable';
import { TableCard } from '../../styling/Ui';
import { LeaseGqlObject, LeaseItem } from 'graphql/generated/serverModel';

export type LeaseTablePropsType = {
  lease: LeaseGqlObject;
};

type Column = {
  header: string;
  width: string;
  render: (obj: LeaseItem, index: number) => React.ReactNode;
};

const LeaseTable = ({ lease }: LeaseTablePropsType) => {
  const theme = useTheme();

  const tableColumns: Array<Column> = [
    {
      header: '#',
      width: '3%',
      render: (obj: LeaseItem, index: number) => (
        <TableCell key="#" height="20px">
          <FormBody>{index}</FormBody>
        </TableCell>
      ),
    },
    {
      header: 'Product Description',
      width: '70%',
      render: (obj: LeaseItem, index: number) => (
        <TableCell key="Product Description" height="20px">
          <FormBody>{obj.product.name}</FormBody>
        </TableCell>
      ),
    },
    {
      header: 'Price',
      width: '15%',
      render: (obj: LeaseItem, index: number) => (
        <TableCell key="Price" height="20px" textAlign="right">
          <FormBody>{centToDollarStr(obj.product.price)}</FormBody>
        </TableCell>
      ),
    },
    {
      header: 'Quantity',
      width: '12%',
      render: (obj: LeaseItem, index: number) => (
        <TableCell key="Quantity" height="20px">
          <FormBody>{obj.quantity}</FormBody>
        </TableCell>
      ),
    },
  ];

  const tableHeaders = (
    <TableRow borderBottom={`1px solid ${theme.colours.grey}`}>
      {tableColumns.map((col) => (
        <TableHeader key={col.header}>
          <FormBodyBold>{col.header}</FormBodyBold>
        </TableHeader>
      ))}
    </TableRow>
  );

  return (
    <TableCard>
      <FormSubHeader marginBottom="12px">Lease</FormSubHeader>
      <LabelAndContentTable col1Width="20%" col2Width="80%" marginBottom="12px">
        <LabelAndContentTableRow>
          <LabelAndContentTableCell height="10px" textAlign="left" paddingVertical="3px">
            <FormBodyBold>Lease ID</FormBodyBold>
          </LabelAndContentTableCell>
          <LabelAndContentTableCell height="10px" textAlign="left" paddingVertical="3px">
            <FormBody>{lease.id}</FormBody>
          </LabelAndContentTableCell>
        </LabelAndContentTableRow>
        <LabelAndContentTableRow>
          <LabelAndContentTableCell height="10px" textAlign="left" paddingVertical="3px">
            <FormBodyBold>Lease Terms</FormBodyBold>
          </LabelAndContentTableCell>
          <LabelAndContentTableCell height="10px" textAlign="left" paddingVertical="3px">
            <FormBody>{lease.leaseTerms}</FormBody>
          </LabelAndContentTableCell>
        </LabelAndContentTableRow>
        <LabelAndContentTableRow>
          <LabelAndContentTableCell height="10px" textAlign="left" paddingVertical="3px">
            <FormBodyBold>Lease Terms Frequency</FormBodyBold>
          </LabelAndContentTableCell>
          <LabelAndContentTableCell height="10px" textAlign="left" paddingVertical="3px">
            <FormBody>{lease.leaseTermsFrequency}</FormBody>
          </LabelAndContentTableCell>
        </LabelAndContentTableRow>
        <LabelAndContentTableRow>
          <LabelAndContentTableCell height="10px" textAlign="left" paddingVertical="3px">
            <FormBodyBold>Recurring Amount</FormBodyBold>
          </LabelAndContentTableCell>
          <LabelAndContentTableCell height="10px" textAlign="left" paddingVertical="3px">
            <FormBody>{centToDollarStr(lease.recurringPaymentAmount)}</FormBody>
          </LabelAndContentTableCell>
        </LabelAndContentTableRow>
        <LabelAndContentTableRow>
          <LabelAndContentTableCell height="10px" textAlign="left" paddingVertical="3px">
            <FormBodyBold>Recurring Protection Plan Amount</FormBodyBold>
          </LabelAndContentTableCell>
          <LabelAndContentTableCell height="10px" textAlign="left" paddingVertical="3px">
            <FormBody>{centToDollarStr(lease.recurringInsuranceAmount)}</FormBody>
          </LabelAndContentTableCell>
        </LabelAndContentTableRow>
      </LabelAndContentTable>
      <StyledTable>
        <colgroup>
          {tableColumns.map((col) => (
            <col key={col.header} span={1} style={{ width: col.width }} />
          ))}
        </colgroup>
        <tbody>
          {tableHeaders}
          {lease.items.map((product, index) => (
            <TableRow key={product.product.id}>
              {tableColumns.map((col) => col.render(product, index))}
            </TableRow>
          ))}

          <TableRow borderTop={`1px solid ${theme.colours.primary}`}>
            <TableCell width="3%" height="20px"></TableCell>
            <TableCell width="70%" height="20px">
              <FormBody>Down Payment</FormBody>
            </TableCell>
            <TableCell width="15%" height="20px" textAlign="right">
              <FormBody>{centToDollarStr(-1 * lease.downPaymentAmount)}</FormBody>
            </TableCell>
            <TableCell width="12%" height="20px"></TableCell>
          </TableRow>
          <TableRow>
            <TableCell width="3%" height="20px"></TableCell>
            <TableCell width="70%" height="20px">
              <FormBody>Delivery Fees</FormBody>
            </TableCell>
            <TableCell width="15%" height="20px" textAlign="right">
              <FormBody>{centToDollarStr(lease.shippingFees)}</FormBody>
            </TableCell>
            <TableCell width="12%" height="20px"></TableCell>
          </TableRow>
          <TableRow>
            <TableCell width="3%" height="20px"></TableCell>
            <TableCell width="70%" height="20px">
              <FormBody>Taxes</FormBody>
            </TableCell>
            <TableCell width="15%" height="20px" textAlign="right">
              <FormBody>{centToDollarStr(lease.salesTax)}</FormBody>
            </TableCell>
            <TableCell width="12%" height="20px"></TableCell>
          </TableRow>
          <TableRow borderTop={`2px solid ${theme.colours.blueGrey}`}>
            <TableHeader></TableHeader>
            <TableHeader>
              <FormBodyBold>Total Invoiced Amount</FormBodyBold>
            </TableHeader>
            <TableHeader textAlign="right">
              <FormBody>{centToDollarStr(lease.capitalizedCost)}</FormBody>
            </TableHeader>
            <TableHeader></TableHeader>
          </TableRow>
        </tbody>
      </StyledTable>
    </TableCard>
  );
};

export default LeaseTable;
