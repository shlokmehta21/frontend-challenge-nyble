import styled from 'styled-components';
import { optional } from 'utils/styledComponents';

export const LeaseDetailRow = styled.div<{ marginBottom?: string }>`
  display: flex;
  ${optional('marginBottom', 'margin-bottom', '8px')}
`;

export const LeaseDetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colours.grey};
  border-radius: 4px;
  padding: 16px 24px;
  width: 100%;
  margin-bottom: 32px;
`;

export const StyledTable = styled.table`
  border: 1px solid ${({ theme }) => theme.colours.grey};
  border-radius: 4px;
  border-collapse: collapse;
`;

export const TableRow = styled.tr<{ borderBottom?: string; borderTop?: string }>`
  ${optional('borderBottom', 'border-bottom')}
  ${optional('borderTop', 'border-top')}
`;

export const TableHeader = styled.th<{ textAlign?: string }>`
  height: 32px;
  padding-top: 8px;
  padding-bottom: 8px;
  ${optional('textAlign', 'text-align')}

  :first-child,
  last-child {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const TableCell = styled.td<{ height?: string; textAlign?: string; padding?: string }>`
  height: 48px;
  ${optional('height', 'height')}
  text-align: center;
  ${optional('textAlign', 'text-align')}
  word-wrap: break-word;
  word-break: break-all;

  padding-top: 8px;
  ${optional('padding', 'padding-top')}
  padding-bottom: 8px;
  ${optional('padding', 'padding-bottom')}

  :first-child,
  last-child {
    padding-left: 24px;
    padding-right: 24px;
  }
`;
