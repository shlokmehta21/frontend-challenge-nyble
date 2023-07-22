import { PageWidth } from 'Mixins/Position';
import styled from 'styled-components';

export const PageBackgroundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${PageWidth}
`;

export const PageBackgroundInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  position: fixed;
`;

export const UpperPortion = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 40%;

  background: ${({ theme }) => theme.newColours.white};
`;

export const LowerPortion = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60%;
  // border-top-left-radius: 10px;
  // border-top-right-radius: 10px;
  ${({ theme }) => `background-color: ${theme.newColours.white};`}
`;

export const GradientBackground = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 120%;
  background: rgb(44, 255, 207);
  background: linear-gradient(
    126deg,
    rgba(44, 255, 207, 1) 0%,
    rgba(255, 96, 235, 1) 45%,
    rgba(48, 146, 255, 1) 100%
  );
`;

export const GreyBackground = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 120%;
  background: ${({ theme }) => theme.newColours.grey3};
`;
