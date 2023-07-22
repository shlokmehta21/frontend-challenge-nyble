import { StandardFont } from 'Mixins/Font';
import { H1, H2, H3, T0, T00, T1, T2, T3, T4, T5 } from 'Mixins/NewFont';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { optional } from 'utils/styledComponents';

/* 
  This will be the replacement for our Form and Page texts
*/

export const PageHeader = styled.div<{
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;
}>`
  ${H1()}
  color: ${({ theme }) => theme.colours.black};
  ${optional('marginBottom', 'margin-bottom')}
  ${optional('textAlign', 'text-align')}
  ${optional('alignSelf', 'align-self')}
  ${optional('maxWidth', 'max-width')}

  ${breakpoint('mobile', 'tablet')`
    ${H1({ mobile: true })}
  `}
`;

export const SectionHeader = styled.div<{
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;
  color?: string;
}>`
  ${H2()}
  color: ${({ theme }) => theme.colours.black};
  ${optional('color', 'color')}
  ${optional('marginBottom', 'margin-bottom')}
  ${optional('textAlign', 'text-align')}
  ${optional('alignSelf', 'align-self')}
  ${optional('maxWidth', 'max-width')}

  ${breakpoint('mobile', 'tablet')`
    ${H2({ mobile: true })}
  `}
`;

export const FormHeader = styled.div<{
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;
  color?: string;
}>`
  ${H3()}
  color: ${({ theme }) => theme.colours.primary};
  ${optional('marginBottom', 'margin-bottom')}
  ${optional('textAlign', 'text-align')}
  ${optional('alignSelf', 'align-self')}
  ${optional('maxWidth', 'max-width')}
  ${optional('color', 'color')}


  ${breakpoint('mobile', 'tablet')`
    ${H3({ mobile: true })}
  `}
`;

export const XLargeText = styled.div<{
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;
  color?: string;
  padding?: string;
  bold?: boolean;
}>`
  ${({ bold }) => T0({ bold })}
  ${optional('marginBottom', 'margin-bottom')}
  ${optional('textAlign', 'text-align')}
  ${optional('alignSelf', 'align-self')}
  ${optional('maxWidth', 'max-width')}
  color: ${({ theme }) => theme.colours.black};
  ${optional('color', 'color')}
  ${optional('padding', 'padding')}
`;

export const XXLargeText = styled.div<{
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;
  color?: string;
  padding?: string;
  bold?: boolean;
}>`
  ${({ bold }) => T00({ bold })}
  ${optional('marginBottom', 'margin-bottom')}
  ${optional('textAlign', 'text-align')}
  ${optional('alignSelf', 'align-self')}
  ${optional('maxWidth', 'max-width')}
  color: ${({ theme }) => theme.colours.black};
  ${optional('color', 'color')}
  ${optional('padding', 'padding')}
`;

export const LargeText = styled.div<{
  marginBottom?: string;
  paddingTop?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;
  color?: string;
  padding?: string;
  bold?: boolean;
  black?: boolean;
}>`
  ${({ bold, black }) => T1({ bold, black })}
  display: inline-block;
  ${optional('marginBottom', 'margin-bottom')}
  ${optional('textAlign', 'text-align')}
  ${optional('alignSelf', 'align-self')}
  ${optional('maxWidth', 'max-width')}
  color: ${({ theme }) => theme.colours.black};
  ${optional('color', 'color')}
  ${optional('padding', 'padding')}
  ${optional('paddingTop', 'padding-top')}

  ${({ bold, black }) => breakpoint('mobile', 'tablet')`
    ${T1({ mobile: true, bold, black })}
  `}
`;

export const ButtonText = styled.div<{ color?: string; padding?: string; bold?: boolean }>`
  color: ${({ theme }) => theme.newColours.white};
  display: inline-block;

  ${optional('marginBottom', 'margin-bottom')}
  ${optional('marginLeft', 'margin-left')}
  ${optional('textAlign', 'text-align')}
  ${optional('maxWidth', 'max-width')}
  ${optional('alignSelf', 'align-self')}
  ${optional('color', 'color')}

  ${({ bold }) => breakpoint('mobile', 'desktop')`
    ${T2({ mobile: true, black: true })}
  `}
`;

export const MediumText = styled.div<{
  marginBottom?: string;
  marginLeft?: string;
  textAlign?: string;
  maxWidth?: string;
  alignSelf?: string;
  color?: string;
  black?: boolean;
  bold?: boolean;
}>`
  ${({ bold, black }) => T2({ bold, black })}
  color: ${({ theme }) => theme.newColours.black};
  display: inline-block;

  ${optional('marginBottom', 'margin-bottom')}
  ${optional('marginLeft', 'margin-left')}
  ${optional('textAlign', 'text-align')}
  ${optional('maxWidth', 'max-width')}
  ${optional('alignSelf', 'align-self')}
  ${optional('color', 'color')}

  ${({ bold, black }) => breakpoint('mobile', 'tablet')`
    ${T2({ mobile: true, bold, black })}
  `}
`;

export const FormBody = styled.div<{
  marginBottom?: string;
  marginLeft?: string;
  textAlign?: string;
  maxWidth?: string;
  alignSelf?: string;

  bold?: boolean;
  underline?: boolean;
  clickable?: boolean;
  color?: string;
}>`
  ${({ bold }) => T2({ bold })}
  ${({ underline }) => (underline ? 'text-decoration: underline;' : '')}
  ${({ clickable }) => (clickable ? 'cursor: pointer;' : '')}
  color: ${({ theme }) => theme.newColours.primary1};
  display: inline-block;

  ${optional('marginBottom', 'margin-bottom')}
  ${optional('marginLeft', 'margin-left')}
  ${optional('textAlign', 'text-align')}
  ${optional('maxWidth', 'max-width')}
  ${optional('alignSelf', 'align-self')}
  ${optional('color', 'color')}

  ${({ bold }) => breakpoint('mobile', 'tablet')`
    ${T2({ mobile: true, bold })}
  `}
`;

export const LinkText = styled.a<{
  color?: string;
}>`
  cursor: pointer;
  color: ${({ theme }) => theme.colours.primary};
  ${optional('color', 'color')}
  text-decoration: underline;
`;

export const FormDisclaimer = styled.div<{
  marginBottom?: string;
  marginLeft?: string;
  textAlign?: string;
  maxWidth?: string;
  alignSelf?: string;
  underline?: boolean;
  color?: string;
  bold?: boolean;
}>`
  ${({ bold }) => T3({ bold })}
  color: ${({ theme }) => theme.newColours.primary1};
  display: inline-block;
  ${({ underline }) => underline && 'text-decoration: underline;'}

  ${optional('marginBottom', 'margin-bottom')}
  ${optional('marginLeft', 'margin-left')}
  ${optional('textAlign', 'text-align')}
  ${optional('maxWidth', 'max-width')}
  ${optional('alignSelf', 'align-self')}
  ${optional('color', 'color')}

  ${({ bold }) => breakpoint('mobile', 'tablet')`
    ${T3({ mobile: true, bold })}
  `}
`;

export const SmallText = styled.div<{
  marginBottom?: string;
  marginLeft?: string;
  textAlign?: string;
  maxWidth?: string;
  alignSelf?: string;

  bold?: boolean;
  black?: boolean;
  color?: string;
}>`
  ${({ bold, black }) => T3({ bold, black })}
  color: ${({ theme }) => theme.newColours.black};
  display: inline;

  ${optional('marginBottom', 'margin-bottom')}
  ${optional('marginLeft', 'margin-left')}
  ${optional('textAlign', 'text-align')}
  ${optional('maxWidth', 'max-width')}
  ${optional('alignSelf', 'align-self')}
  ${optional('color', 'color')}

  ${({ bold, black }) => breakpoint('mobile', 'tablet')`
    ${T3({ mobile: true, bold, black })}
  `}
`;

export const TinyText = styled.div<{
  marginBottom?: string;
  marginLeft?: string;
  textAlign?: string;
  color?: string;
  maxWidth?: string;
  alignSelf?: string;
  alignItems?: string;

  bold?: boolean;
  black?: boolean;
}>`
  ${({ bold, black }) => T4({ bold, black })}
  color: ${({ theme }) => theme.colours.black};
  flex-direction: row;

  ${optional('marginBottom', 'margin-bottom')}
  ${optional('marginLeft', 'margin-left')}
  ${optional('textAlign', 'text-align')}
  ${optional('maxWidth', 'max-width')}
  ${optional('alignSelf', 'align-self')}
  ${optional('alignItems', 'align-items')}
  ${optional('color', 'color')}
`;

export const MiniText = styled.div<{
  marginBottom?: string;
  marginLeft?: string;
  textAlign?: string;
  color?: string;
  maxWidth?: string;
  alignSelf?: string;
  alignItems?: string;
  rotate?: boolean;

  bold?: boolean;
  black?: boolean;
}>`
  ${({ bold, black }) => T5({ bold, black })}
  color: ${({ theme }) => theme.colours.black};
  flex-direction: row;

  ${({ rotate }) =>
    rotate &&
    `
      -webkit-transform: rotate(300deg);
      -moz-transform: rotate(300deg);
      -o-transform: rotate(300deg);
      -ms-transform: rotate(300deg);
      transform: rotate(300deg);
  `}

  ${optional('marginBottom', 'margin-bottom')}
  ${optional('marginLeft', 'margin-left')}
  ${optional('textAlign', 'text-align')}
  ${optional('maxWidth', 'max-width')}
  ${optional('alignSelf', 'align-self')}
  ${optional('alignItems', 'align-items')}
  ${optional('color', 'color')}
`;

// Rainbows

export const XXLargeTextRainbow = styled.div<{
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;

  padding?: string;
  bold?: boolean;
}>`
  ${({ bold }) => T00({ bold })}
  ${StandardFont}
  ${optional('marginBottom', 'margin-bottom')}
  ${optional('textAlign', 'text-align')}
  ${optional('alignSelf', 'align-self')}
  ${optional('maxWidth', 'max-width')}
  color: ${({ theme }) => theme.colours.black};
  ${optional('color', 'color')}
  ${optional('padding', 'padding')}

  background: rgb(250,168,255);
  background: linear-gradient(
    126deg,
    rgba(250, 168, 255, 1) 0%,
    rgba(104, 233, 189, 1) 44%,
    rgba(93, 217, 255, 1) 97%
  );
  background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const XLargeTextRainbow = styled.div<{
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;

  padding?: string;
  bold?: boolean;
}>`
  ${({ bold }) => T0({ bold })}
  ${optional('marginBottom', 'margin-bottom')}
  ${optional('textAlign', 'text-align')}
  ${optional('alignSelf', 'align-self')}
  ${optional('maxWidth', 'max-width')}
  color: ${({ theme }) => theme.colours.black};
  ${optional('color', 'color')}
  ${optional('padding', 'padding')}

  background: rgb(250,168,255);
  background: linear-gradient(
    126deg,
    rgba(250, 168, 255, 1) 0%,
    rgba(104, 233, 189, 1) 44%,
    rgba(93, 217, 255, 1) 97%
  );
  background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
