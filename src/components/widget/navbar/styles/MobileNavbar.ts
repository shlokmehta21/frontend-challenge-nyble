import styled from 'styled-components';
import { H1, H2, H3, T1, T2, T3, H4 } from 'Mixins/NewFont';

import { PageContentWidth, PageWidth } from 'Mixins/Position';
import { optional } from 'utils/styledComponents';
import breakpoint from 'styled-components-breakpoint';
import { BoxShadow } from 'Mixins/Font';

export const MobileNavbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${({ theme }) => theme.sizing.navbar.mobile.height}px;
  width: 100%;
  max-width: 600px;
  background: white;
  position: fixed;
  top: 0;
  z-index: 2;
`;
export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 70px;
  ${PageWidth}
  background: white;
  position: fixed;
  bottom: 0;
  z-index: 10;
  ${BoxShadow}

  border: 1px solid ${({ theme }) => theme.colours.lightBlueGrey};
`;

export const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 0;
  width: 90%;
`;

export const FooterContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 600px;
  z-index: 0;
  padding-top: 10px;
  padding-bottom: 5px;
  width: 100%;
`;

export const MobileNavbarSpacer = styled.div`
  height: ${({ theme }) => theme.sizing.navbar.mobile.height}px;
`;

export const TabSection = styled.div<{
  alignItems?: string;
}>`
  display: flex;
  flex-direction: row;
  width: 100px;

  ${optional('alignItems', 'justify-content')}
`;

export const FooterTabSection = styled.div<{
  alignItems?: string;
  justifyContent?: string;
}>`
  display: flex;
  flex-direction: column;

  width: 100px;

  ${optional('alignItems', 'align-items', 'center')}
  ${optional('justifyContent', 'justify-content', 'center')}
`;

export const CustomerProfilePic = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 30px;
  margin-left: 10px;
  background-image: url('https://thumbs.dreamstime.com/b/goose-head-vector-illustration-flat-style-profile-goose-head-vector-illustration-flat-style-profile-side-113201744.jpg');
  background-size: contain;
`;
