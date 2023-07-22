import { BoxShadowHeavy } from 'components/styling/Ui';
import { PageContentWidth } from 'Mixins/Position';
import styled from 'styled-components';
import { optional } from 'utils/styledComponents';

export const MobileNavbarSidebarWrapper = styled.div<{
  isOpen: boolean;
  height: number;
  background?: string;
}>`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.newColours.primary1};
  align-items: center;
  justify-content: space-between;

  position: fixed;
  height: ${({ height }) => height}px;
  width: ${({ theme, isOpen }) => (isOpen ? 234 : 0)}px;
  z-index: 1;
  top: 0;
  right: 0;

  ${BoxShadowHeavy}

  overflow: hidden;
  transition: width 0.3s ease-in;
  ${optional('background', 'background')}
`;

export const UpperSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const MenuSection = styled.div`
  display: flex;
  align-items: center;
  height: 55px;
  padding-top: 25px;
  padding-left: 25px;
  justify-content: flex-start;
  width: 100%;

  margin-bottom: 16px;
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;

  border-bottom: 1px solid ${({ theme }) => theme.colours.lightBlueGrey};

  margin-bottom: 16px;
`;

export const UserIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 80px;
  border-radius: 50%;

  background-color: ${({ theme }) => theme.newColours.white};
`;

export const NavLinkWrapper = styled.div<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  width: 80%;
  border-radius: 10px;
  padding: 12px;
  ${({ selected, theme }) => (selected ? `background: ${theme.newColours.blue3}` : '')}
`;

export const LowerNavSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 32px;
  border-radius: 10px 10px 0px 0px;
`;

export const NavOptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  margin-bottom: 12px;
`;
