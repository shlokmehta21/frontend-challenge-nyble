import styled, { DefaultTheme } from 'styled-components';

import PngImage from 'components/display/PngImage';
import breakpoint from 'styled-components-breakpoint';
import { R14, Deprecated_H2 } from 'Mixins/Font';
import { SlidingUnderline } from 'Mixins/Animation';
import { PageContentWidth, PageWidth } from 'Mixins/Position';
import Button from 'components/input/button/Button';
import { FormHeader } from 'components/styling/Form';

// Some magic involving breakpoint, we pretty much just want it to give us a
// proper css string
const NavbarHeight = ({ theme }: { theme: DefaultTheme }) => `
  ${breakpoint('mobile', 'tablet')`
    height: ${theme.sizing.navbar.mobile.height}px;
  `({ theme }).reduce((acc, curr) => {
    return `${acc}${curr.toString()}`;
  }, '')}

  ${breakpoint('tablet', 'desktop')`
    height: ${theme.sizing.navbar.tablet.height}px;
  `({ theme }).reduce((acc, curr) => {
    return `${acc}${curr.toString()}`;
  }, '')}

  ${breakpoint('desktop')`
    height: ${theme.sizing.navbar.desktop.height}px;
  `({ theme }).reduce((acc, curr) => {
    return `${acc}${curr.toString()}`;
  }, '')}
`;

export const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  ${NavbarHeight}
  ${PageWidth}
  background: ${({ theme }) => theme.colours.white};
  position: fixed;
  top: 0;
  box-shadow: 0 3px 5px rgba(142, 147, 148, 0.8);
`;

export const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${PageContentWidth}
`;

export const LogoAndPossiblyStoreNameWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const NavbarImage = styled(PngImage)`
  ${breakpoint('mobile', 'tablet')`
    height: ${({ theme }) => theme.sizing.navbar.mobile.iconHeight}px;
  `}

  ${breakpoint('tablet', 'desktop')`
    height: ${({ theme }) => theme.sizing.navbar.tablet.iconHeight}px;
  `}

  ${breakpoint('desktop')`
      height: ${({ theme }) => theme.sizing.navbar.desktop.iconHeight}px;
  `}
`;

export const NavbarSpacer = styled.div`
  ${NavbarHeight}
`;

export const NavSection = styled.div`
  display: flex;
`;

export const NavLinkWrapper = styled.div<{ selected: boolean }>`
  display: flex;
  cursor: pointer;
  padding: 8px;

  ${({ selected }) =>
    selected
      ? `
    border-radius: 30px;
    border: 1px solid black;
  `
      : ''}
`;

export const TabSection = styled.div`
  display: flex;
  align-items: center;
`;

export const ApplyButton = styled(Button)`
  border-radius: 20px;
`;

export const ApplyButtonText = styled(FormHeader)`
  color: ${({ theme }) => theme.colours.white};
`;

export const LoginButtonWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  height: 100%;
`;

export const UnderlineableText = styled.div`
  ${Deprecated_H2}
  color: ${({ theme }) => theme.colours.white};
  ${({ theme }) => SlidingUnderline({ theme })}
`;

export const MenuItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const MenuItemText = styled.div<{ parentHovered?: boolean }>`
  ${R14}
  color: ${({ theme, parentHovered }) =>
    parentHovered ? theme.colours.primary : theme.colours.grey};
`;
