import { DefaultTheme } from 'styled-components';

export const SlidingUnderline = ({ theme }: { theme: DefaultTheme }) => `
  position: relative;
  padding: 0 0 0.3em 0;
  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -1px;
    width: 100%;
    height: min(0.13em, 3px);
    background-color: ${theme.colours.white};
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
  }

  :hover::after,
  :focus::after {
    opacity: 1;
    transform: translate3d(0, 0.2em, 0);
  }

  overflow: hidden;

  ::after {
    opacity 1;
    transform: translate3d(-100%, 0, 0);
  }

  :hover::after, :focus::after {
    transform: translate3d(0, 0, 0);
  }
`;

export const HoverTransition = (target = 'all', time = '0.1s') => `
  transition: ${target} ${time} ease-in;
`;

export const Hover = (darker = false) => `
  ${HoverTransition()}
  &:hover, &:focus {
    filter: brightness(${darker ? '60%' : '85%'});
  }
`;
