import theme from "GlobalTheme";
import React, { FC } from "react";

type AccountIconPropsType = {
  height?: string;
  width?: string;
};

const WoofIcon: FC<AccountIconPropsType> = ({
  height = "30",
  width = "30",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.3125 17.9875L15 27.6625L1.6875 17.9875C1.50903 17.8563 1.37665 17.6719 1.30929 17.4609C1.24193 17.2498 1.24306 17.0229 1.3125 16.8125L2.8375 12.0875L5.8875 2.70001C5.91708 2.62352 5.96417 2.55502 6.025 2.50001C6.12405 2.40954 6.25335 2.35938 6.3875 2.35938C6.52165 2.35938 6.65095 2.40954 6.75 2.50001C6.81423 2.56209 6.86155 2.63954 6.8875 2.72501L9.9375 12.0875H20.0625L23.1125 2.70001C23.1421 2.62352 23.1892 2.55502 23.25 2.50001C23.349 2.40954 23.4783 2.35937 23.6125 2.35938C23.7466 2.35938 23.8759 2.40954 23.975 2.50001C24.0392 2.56209 24.0866 2.63954 24.1125 2.72501L27.1625 12.1125L28.75 16.8125C28.8132 17.0294 28.8047 17.2608 28.7259 17.4725C28.6471 17.6842 28.5021 17.8648 28.3125 17.9875Z"
        stroke={theme.colours.neutral.dark}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default WoofIcon;
