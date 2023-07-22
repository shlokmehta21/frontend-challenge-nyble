import { DefaultTheme } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

// Some magic involving breakpoint, we pretty much just want it to give us a
// proper css string
// This mixin is meant to be put into page wrappers to give them the
// correct height with the navbar
export const HeightWithNavbar = ({
  theme,
  multiplier = 1,
}: {
  theme: DefaultTheme;
  multiplier?: number;
}) => `
  ${breakpoint('mobile', 'tablet')`
  height: ${`calc(100% - ${theme.sizing.navbar.mobile.height}px * ${multiplier})`};
  `({ theme }).reduce((acc, curr) => {
    return `${acc}${curr.toString()}`;
  }, '')};

  ${breakpoint('tablet', 'desktop')`
  height: calc(${`(100% - ${theme.sizing.navbar.tablet.height}px) * ${multiplier}`});
  `({ theme }).reduce((acc, curr) => {
    return `${acc}${curr.toString()}`;
  }, '')};

  ${breakpoint('desktop')`
    height: calc(${`(100% - ${theme.sizing.navbar.desktop.height}px) * ${multiplier}`});
  `({ theme }).reduce((acc, curr) => {
    return `${acc}${curr.toString()}`;
  }, '')};
`;

// Sets page's width
export const PageWidth = ({ theme }: { theme: DefaultTheme }) => `
${breakpoint('mobile', 'tablet')`
  width: 100%;
`({ theme }).reduce((acc, curr) => {
  return `${acc}${curr.toString()}`;
}, '')}

${breakpoint('tablet')`
  width: 100vw;
`({ theme }).reduce((acc, curr) => {
  return `${acc}${curr.toString()}`;
}, '')}
`;

// Adjusts max width of entire page's content
export const PageContentWidth = ({ theme }: { theme: DefaultTheme }) => `
  ${breakpoint('mobile', 'tablet')`
    padding-left: 16px;
    padding-right: 16px;
    width: 100%;
  `({ theme }).reduce((acc, curr) => {
    return `${acc}${curr.toString()}`;
  }, '')}

  ${breakpoint('tablet', 'desktop')`
    width: ${theme.sizing.contentWidth.tablet}px;
  `({ theme }).reduce((acc, curr) => {
    return `${acc}${curr.toString()}`;
  }, '')}

  ${breakpoint('desktop')`
    width: ${theme.sizing.contentWidth.desktop}px;
  `({ theme }).reduce((acc, curr) => {
    return `${acc}${curr.toString()}`;
  }, '')}
`;

export const PageTopPadding = ({ theme }: { theme: DefaultTheme }) => `
  ${breakpoint('mobile', 'tablet')`
    padding-top: 16px;
  `({ theme }).reduce((acc, curr) => {
    return `${acc}${curr.toString()}`;
  }, '')};

  ${breakpoint('tablet', 'desktop')`
    padding-top: 32px;
  `({ theme }).reduce((acc, curr) => {
    return `${acc}${curr.toString()}`;
  }, '')};

  ${breakpoint('desktop')`
  padding-top: 64px;
  `({ theme }).reduce((acc, curr) => {
    return `${acc}${curr.toString()}`;
  }, '')};
`;
