import styled from 'styled-components';

import { B36, B36m, B64, B64m, R24, R24m, R30, R48, R48m } from 'Mixins/Font';
import { optional } from 'utils/styledComponents';
import breakpoint from 'styled-components-breakpoint';

/* NOTE EVERYTHING HERE IS BEING DEPRECATED */

// Note marginBottom must be given as string with units
export const PageHeader = styled.div<{
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;
  maxWidthPhone?: string;
}>`
  color: ${({ theme }) => theme.colours.black};
  ${optional('marginBottom', 'margin-bottom')}
  ${optional('textAlign', 'text-align')}
  ${optional('alignSelf', 'align-self')}
  ${optional('maxWidth', 'max-width')}

  ${breakpoint('mobile', 'tablet')`
    ${B64m}
    ${`${optional('maxWidthPhone', 'max-width')}`}
  `}

  ${breakpoint('tablet')`
    ${B64}
  `}
`;

// Note marginBottom must be given as string with units
export const PageSectionHeader = styled.div<{
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;
  maxWidthPhone?: string;
  color?: string;
}>`
  ${({ theme }) => optional('color', 'color', theme.colours.black)};
  ${optional('marginBottom', 'margin-bottom')}
  ${optional('textAlign', 'text-align')}
  ${optional('alignSelf', 'align-self')}
  ${optional('maxWidth', 'max-width')}

  ${breakpoint('mobile', 'tablet')`
    ${R48m}
    ${`${optional('maxWidthPhone', 'max-width')}`}
  `}

  ${breakpoint('tablet')`
    ${R48}
  `}
`;

// Note marginBottom must be given as string with units
export const PageSectionSubheader = styled.div<{
  marginBottom?: string;
  marginTop?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;
  maxWidthPhone?: string;
}>`
  color: ${({ theme }) => theme.colours.black};
  ${optional('marginBottom', 'margin-bottom')}
  ${optional('marginTop', 'margin-top')}
  ${optional('textAlign', 'text-align')}
  ${optional('alignSelf', 'align-self')}
  ${optional('maxWidth', 'max-width')}

  ${breakpoint('mobile', 'tablet')`
    ${R24m}
    ${`${optional('maxWidthPhone', 'max-width')}`}
  `}

  ${breakpoint('tablet')`
    ${R30}
  `}
`;

// Note marginBottom must be given as string with units
export const PageButtonText = styled.div<{
  alignSelf?: string;
}>`
  ${breakpoint('mobile', 'tablet')`
    ${B36m}
  `}

  ${breakpoint('tablet')`
    ${B36}
  `}
  color: ${({ theme }) => theme.colours.white};
  ${optional('alignSelf', 'align-self')}
`;

// Note marginBottom must be given as string with units
export const PageSectionText = styled.div<{
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;
  maxWidthPhone?: string;
  color?: string;
}>`
  ${({ theme }) => optional('color', 'color', theme.colours.primary)};
  ${optional('marginBottom', 'margin-bottom')}
  ${optional('textAlign', 'text-align')}
  ${optional('alignSelf', 'align-self')}
  ${optional('maxWidth', 'max-width')}

  ${breakpoint('mobile', 'tablet')`
    ${R24m}
    ${optional('maxWidthPhone', 'max-width')}
  `}

  ${breakpoint('tablet')`
    ${R24}
  `}
`;
