import styled, { DefaultTheme } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const ModalBorderRadius = `border-radius: 20px;`;

export const ScreenFormHorizontalPadding = ({ theme }: { theme: DefaultTheme }) => `
  ${breakpoint('mobile', 'tablet')`
    padding-left: 12px;
    padding-right: 12px;
  `({ theme }).reduce((acc, curr) => {
    return `${acc}${curr.toString()}`;
  }, '')};

  ${breakpoint('tablet', 'desktop')`
    padding-left: 24px;
    padding-right: 24px;
  `({ theme }).reduce((acc, curr) => {
    return `${acc}${curr.toString()}`;
  }, '')};

  ${breakpoint('desktop')`
    padding-left: 32px;
    padding-right: 32px;
  `({ theme }).reduce((acc, curr) => {
    return `${acc}${curr.toString()}`;
  }, '')};
`;

export const ScreenFormVerticalPadding = ({ theme }: { theme: DefaultTheme }) => `
  ${breakpoint('mobile', 'tablet')`
    padding-top: 20px;
    padding-bottom: 20px;
  `({ theme }).reduce((acc, curr) => {
    return `${acc}${curr.toString()}`;
  }, '')};

  ${breakpoint('tablet', 'desktop')`
    padding-top: 32px;
    padding-bottom: 32px;
  `({ theme }).reduce((acc, curr) => {
    return `${acc}${curr.toString()}`;
  }, '')};

  ${breakpoint('desktop')`
    padding-top: 32px;
    padding-bottom: 32px;
  `({ theme }).reduce((acc, curr) => {
    return `${acc}${curr.toString()}`;
  }, '')};
`;
