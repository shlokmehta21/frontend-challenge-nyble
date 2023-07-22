import { BoldFont, MediumFont, SemiBoldFont } from './Font';

export const StandardFont = `'Poppins', sans-serif`;

export const BoxShadow = `
  box-shadow: 0px 4px 7px rgba(236, 237, 237, 0.4),
  0px 0px 6px rgba(142, 147, 148, 0.2);
`;

export const BottomBoxShadow = `
  box-shadow: 0px 1px 3px rgba(236, 237, 237, 0.4),
    0px 1px 3px rgba(142, 147, 148, 0.2);
`;

export const HeavyShadow = `box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)`;

export const LightBoxShadow = `
  box-shadow: 1px 1px 20px #C0C0C0,
  0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export type HeaderFontProps = { mobile?: boolean };

export type TextFontProps = { mobile?: boolean; black?: boolean; bold?: boolean };

/* For the rare big header */
export const H1 = ({ mobile }: HeaderFontProps = {}) => `
  font-family: ${StandardFont};
  font-size: ${mobile ? '28px' : '36px'};
  font-weight: 500;
  font-stretch: normal;
  -webkit-text-size-adjust:100%;  
  -moz-text-size-adjust:100%; 
  -ms-text-size-adjust:100%;
`;

/* For the common secion header */
export const H2 = ({ mobile }: HeaderFontProps = {}) => `
  font-family: ${StandardFont};
  font-size: ${mobile ? '20px' : '24px'};
  font-weight: 500;
  font-stretch: normal;
  -webkit-text-size-adjust:100%;  
  -moz-text-size-adjust:100%; 
  -ms-text-size-adjust:100%;
`;

/* For form headers */
export const H3 = ({ mobile }: HeaderFontProps = {}) => `
  font-family: ${StandardFont};
  font-size: ${mobile ? '16px' : '18px'};
  font-weight: 600;
  -webkit-text-size-adjust:100%;  
  -moz-text-size-adjust:100%; 
  -ms-text-size-adjust:100%;
`;

/* For form headers */
export const H4 = ({ mobile }: HeaderFontProps = {}) => `
  font-family: ${StandardFont};
  font-size: ${mobile ? '14px' : '16px'};
  font-weight: 600;
  -webkit-text-size-adjust:100%;  
  -moz-text-size-adjust:100%; 
  -ms-text-size-adjust:100%;
`;

export const T0 = ({ bold, mobile }: TextFontProps = {}) => `
  font-family: ${bold ? BoldFont : StandardFont};
  font-weight: ${bold ? '600' : '300'};
  font-size: ${mobile ? '28px' : '32px'};
  line-height: ${mobile ? '32px' : '36px'};
  
  letter-spacing: -1px;
  font-stretch: normal;
  -webkit-text-size-adjust:100%;  
  -moz-text-size-adjust:100%; 
  -ms-text-size-adjust:100%;
`;

export const T00 = ({ bold, mobile }: TextFontProps = {}) => `
  font-family: ${bold ? BoldFont : StandardFont};
  font-weight: ${bold ? '800' : '400'};
  font-size: 56px;
  line-height: 68px;
  letter-spacing: -1px;
  font-stretch: normal;
  -webkit-text-size-adjust:100%;  
  -moz-text-size-adjust:100%; 
  -ms-text-size-adjust:100%;
`;

/* For big text like in buttons, big messages */
export const T1 = ({ bold, black, mobile }: TextFontProps = {}) => `
  font-family: ${black ? BoldFont : bold ? SemiBoldFont : StandardFont};
  font-size: 26px;
  font-weight: ${black ? '800' : bold ? '600' : '400'};
  font-stretch: condensed;
  line-height: ${mobile ? '26px' : '30px'};
  letter-spacing: ${bold || black ? '-0.5px' : '-0.25px'};
  -webkit-text-size-adjust:100%;  
  -moz-text-size-adjust:100%; 
  -ms-text-size-adjust:100%;
`;

/* For regular body text */
export const T2 = ({ bold, black, mobile }: TextFontProps = {}) => `
  font-family: ${black ? BoldFont : bold ? SemiBoldFont : StandardFont};
  font-size: 19px;
  font-weight: ${black ? 800 : bold ? 600 : 400};
  font-stretch: normal;
  letter-spacing: ${bold || black ? '-0.5px' : '-0.5px'};
  -webkit-text-size-adjust:100%;  
  -moz-text-size-adjust:100%; 
  -ms-text-size-adjust:100%;
`;

/* For small disclaimer text */
export const T3 = ({ bold, black, mobile }: TextFontProps = {}) => `
  font-family: ${black ? BoldFont : bold ? SemiBoldFont : StandardFont};
  font-size: 16px;
  font-weight: ${black ? 800 : bold ? 600 : 400};
  font-stretch: condensed;
  letter-spacing: 0px;
  -webkit-text-size-adjust:100%;  
  -moz-text-size-adjust:100%; 
  -ms-text-size-adjust:100%;
`;

export const T4 = ({ bold, black }: TextFontProps = {}) => `
  font-family: ${black ? BoldFont : bold ? SemiBoldFont : MediumFont};
  font-weight: ${black ? 800 : bold ? 600 : 500};
  font-size: 14px;
  font-stretch: condensed;
  letter-spacing: ${bold ? '-0.2px' : '0px'};
  -webkit-text-size-adjust:100%;  
  -moz-text-size-adjust:100%; 
  -ms-text-size-adjust:100%;
`;

export const T5 = ({ bold, black }: TextFontProps = {}) => `
  font-family: ${black ? BoldFont : bold ? SemiBoldFont : MediumFont};
  font-weight: ${black ? 800 : bold ? 600 : 500};
  font-size: 9px;
  font-stretch: condensed;
  letter-spacing: ${bold ? '-0.2px' : '-0.2px'};
  -webkit-text-size-adjust:100%;  
  -moz-text-size-adjust:100%; 
  -ms-text-size-adjust:100%;
`;
