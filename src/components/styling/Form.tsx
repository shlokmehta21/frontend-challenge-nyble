import { DefaultTheme } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import {
  B20,
  B18,
  R14,
  R12,
  B14,
  R14Dict,
  R20,
  R18,
  R24,
  R26,
  R26m,
  R20m,
  R36m,
  R36,
} from 'Mixins/Font';
import styled from 'styled-components';
import { optional } from 'utils/styledComponents';

export const FORM_WIDTH = 550;

/* NOTE EVERYTHING HERE IS BEING DEPRECATED */

export const FormWrapper = ({
  theme,
  noTopPadding,
}: {
  theme: DefaultTheme;
  noTopPadding?: boolean;
}) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  height: auto;
  max-width: ${FORM_WIDTH}px;

  ${breakpoint('mobile', 'tablet')`
    margin: 0 16px 0 16px;
    ${!noTopPadding && 'padding-top: 24px;'}
  `({ theme }).reduce((acc, curr) => {
    return `${acc}${curr.toString()}`;
  }, '')};

  ${breakpoint('tablet', 'desktop')`
    ${!noTopPadding && 'padding-top: 64px;'}
  `({ theme }).reduce((acc, curr) => {
    return `${acc}${curr.toString()}`;
  }, '')};

  ${breakpoint('desktop')`
    ${!noTopPadding && 'padding-top: 96px;'}
  `({ theme }).reduce((acc, curr) => {
    return `${acc}${curr.toString()}`;
  }, '')};
`;

// Note marginBottom must be given as string with units
export const FormHeader = styled.div<{
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
}>`
  ${R36}
  color: ${({ theme }) => theme.colours.primary};
  ${optional('marginBottom', 'margin-bottom')}
  ${optional('textAlign', 'text-align')}
  ${optional('alignSelf', 'align-self')}
  ${breakpoint('mobile', 'tablet')`
    ${R36m}
  `}
`;

export const FormSubHeader = styled.div<{
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  color?: string;
}>`
  ${R18}
  color: ${({ theme }) => theme.colours.primary};
  ${optional('marginBottom', 'margin-bottom')}
  ${optional('textAlign', 'text-align')}
  ${optional('color', 'color')}
  ${optional('alignSelf', 'align-self')}
  ${breakpoint('mobile', 'tablet')`
    ${R20m}
  `}
`;

export const FormSubHeaderBold = styled.div<{
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  color?: string;
}>`
  ${B18}
  color: ${({ theme }) => theme.colours.primary};
  ${optional('marginBottom', 'margin-bottom')}
  ${optional('textAlign', 'text-align')}
  ${optional('color', 'color')}
  ${optional('alignSelf', 'align-self')}
  ${breakpoint('mobile', 'tablet')`
    ${R20m}
  `}
`;

export const FormBodyBold = styled.div<{
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;
  minWidth?: string;
  color?: string;
}>`
  ${B14}
  color: ${({ theme }) => theme.colours.black};
  ${optional('marginBottom', 'margin-bottom')}
  ${optional('textAlign', 'text-align')}
  ${optional('alignSelf', 'align-self')}
  ${optional('maxWidth', 'max-width')}
  ${optional('minWidth', 'min-width')}
  ${optional('color', 'color')}
`;

export const FormBodyDict = (theme: DefaultTheme) => ({
  color: theme.newColours.blue3,
  fontWeight: 600,
  fontSize: 12,
  fontFamily: `'Poppins', sans-serif`,
});

export const FormBody = styled.div<{
  marginBottom?: string;
  textAlign?: string;
  maxWidth?: string;
  alignSelf?: string;
  primary?: boolean;
  color?: string;
  marginLeft?: string;
}>`
  ${R14}
  color: ${({ theme, primary }) => (primary ? theme.colours.primary : theme.colours.darkGrey)};
  display: inline-block;

  ${optional('marginBottom', 'margin-bottom')}
  ${optional('marginLeft', 'margin-left')}
  ${optional('textAlign', 'text-align')}
  ${optional('maxWidth', 'max-width')}
  ${optional('alignSelf', 'align-self')}
  ${optional('color', 'color')}
`;

export const ButtonText = styled.div<{ color?: string; padding?: string }>`
  ${R18}
  color: ${({ theme }) => theme.newColours.primary1};
  ${optional('color', 'color')}
  ${optional('padding', 'padding')}
`;

export const PrimaryButtonText = styled.div<{ color?: string; padding?: string }>`
  display: inline-block;
  align-self: center;
  ${R18}
  color: ${({ theme }) => theme.colours.white};
  ${optional('color', 'color')}
  ${optional('padding', 'padding')}
`;

export const FormDisclaimer = styled.div<{
  marginBottom?: string;
  textAlign?: string;
  maxWidth?: string;
  alignSelf?: string;
}>`
  ${R12}
  color: ${({ theme }) => theme.colours.darkGrey};
  ${optional('maxWidth', 'max-width')}
  ${optional('marginBottom', 'margin-bottom')}
  ${optional('textAlign', 'text-align')}
  ${optional('alignSelf', 'align-self')}
`;

export const LinkText = styled.div`
  ${R14}
  color: ${({ theme }) => theme.colours.primary};
`;
