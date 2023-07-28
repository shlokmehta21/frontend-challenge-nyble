import { fadeInAnimation } from "Mixins/Animation";
import styled, { keyframes } from "styled-components";
import breakpoint from "styled-components-breakpoint";

// This file contains common styles for all tabs in the home page

export const TabTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  animation: ${fadeInAnimation} 0.5s ease-in-out;
`;

export const TabBottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeInAnimation} 0.5s ease-in-out;

  ${breakpoint("mobile")`
     margin-top: 15px;
  `}
`;
