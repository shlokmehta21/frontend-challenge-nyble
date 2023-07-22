import { R14 } from 'Mixins/Font';
import styled from 'styled-components';

export const LinkWrapper = styled.a`
  ${R14}
  cursor: pointer;
  color: ${({ theme }) => theme.colours.primary};
  text-decoration: none;
`;

export const LogoLinkWrapper = styled.a`
  ${R14}
  cursor: pointer;
  color: ${({ theme }) => theme.colours.primary};
  text-decoration: none;
  @media only screen and (max-width: 769px) {
    pointer-events: none;
  }
`;
