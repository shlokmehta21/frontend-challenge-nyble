import theme from "GlobalTheme";
import {
  ModalBorderRadius,
  ScreenFormHorizontalPadding,
  ScreenFormVerticalPadding,
} from "Mixins/Style";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const HomePageWrapper = styled.div`
  flex-direction: column;
  height: 100%;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  height: 100vh;
`;

export const HomePageTabWrapper = styled.div<{
  someOption?: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colours.white};
  border-radius: 20px;
  width: 100%;
  min-height: 18rem;

  ${ScreenFormHorizontalPadding({ theme })};

  ${ScreenFormVerticalPadding({ theme })};

  ${ModalBorderRadius}
`;

export const ImageWrapper = styled.img<{}>`
  height: 100px;
  width: 100px;

  ${breakpoint("mobile")`
      height: 75px;
      width: 75px;
  `}

  ${breakpoint("tablet")`
    height: 100px;
    width: 100px;
  `}
`;
