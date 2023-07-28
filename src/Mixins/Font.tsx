import theme from "GlobalTheme";
import styled from "styled-components";
import { optional } from "utils/styledComponents";

export const StandardFont = `'Poppins', sans-serif`;
export const MediumFont = `'Poppins-Medium', sans-serif`;
export const SemiBoldFont = `'Poppins-SemiBold', sans-serif`;
export const BoldFont = `'Poppins-Bold', sans-serif`;
export const ExtraBoldFont = `'Poppins-ExtraBold', sans-serif`;
export const BlackFont = `'Poppins-Black', sans-serif`;

export const LargeHeading = styled.div<{
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;
  color?: string;
}>`
  font-family: ${StandardFont};
  font-size: 24px;
  line-height: 26px;
  font-weight: 900;
  letter-spacing: -2%;
  text-align: center;
  ${optional("marginBottom", "margin-bottom")}
  ${optional("textAlign", "text-align")}
  ${optional("alignSelf", "align-self")}
  ${optional("maxWidth", "max-width")}
  ${optional("color", "color", theme.colours.black)}

  -webkit-text-size-adjust:100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
`;

export const MediumHeading = styled.div<{
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;
  color?: string;
}>`
  font-family: ${StandardFont};
  font-size: 20px;
  line-height: 30px;
  font-stretch: normal;
  font-weight: 800;
  text-align: center;
  ${optional("marginBottom", "margin-bottom")}
  ${optional("textAlign", "text-align")}
  ${optional("alignSelf", "align-self")}
  ${optional("maxWidth", "max-width")}
  ${optional("color", "color", theme.colours.black)}

  -webkit-text-size-adjust:100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
`;

export const SmallHeading = styled.div<{
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;
  color?: string;
}>`
  font-family: ${BoldFont};
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  font-stretch: normal;
  ${optional("marginBottom", "margin-bottom")}
  ${optional("textAlign", "text-align")}
  ${optional("alignSelf", "align-self")}
  ${optional("maxWidth", "max-width")}
  ${optional("color", "color", theme.colours.black)}

  -webkit-text-size-adjust:100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
`;

export const LargeText = styled.div<{
  bold?: boolean;
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;
  color?: string;
}>`
  font-family: ${({ bold }) => (bold ? BoldFont : MediumFont)};
  font-size: 24px;
  line-height: 26px;
  font-stretch: normal;
  font-weight: ${({ bold }) => (bold ? 700 : 500)};
  ${optional("marginBottom", "margin-bottom")}
  ${optional("textAlign", "text-align")}
  ${optional("alignSelf", "align-self")}
  ${optional("maxWidth", "max-width")}
  ${optional("color", "color", theme.colours.black)}

  -webkit-text-size-adjust:100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
`;

export const SmallText = styled.div<{
  bold?: boolean;
  marginBottom?: string;
  marginTop?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;
  color?: string;
}>`
  font-family: ${StandardFont};
  font-size: 16px;
  line-height: 24px;
  font-stretch: normal;
  font-weight: 500;
  ${optional("marginBottom", "margin-bottom")}
  ${optional("marginTop", "margin-top")}
  ${optional("textAlign", "text-align")}
  ${optional("alignSelf", "align-self")}
  ${optional("maxWidth", "max-width")}
  ${optional("color", "color", theme.colours.black)}

  -webkit-text-size-adjust:100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
`;

export const MediumText = styled.div<{
  bold?: boolean;
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;
  color?: string;
}>`
  font-family: ${StandardFont};
  font-size: 20px;
  line-height: 30px;
  font-stretch: normal;
  font-weight: 500;
  ${optional("marginBottom", "margin-bottom")}
  ${optional("textAlign", "text-align")}
  ${optional("alignSelf", "align-self")}
  ${optional("maxWidth", "max-width")}
  ${optional("color", "color", theme.colours.black)}

  -webkit-text-size-adjust:100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
`;

export const VeryLargeText = styled.div<{
  bold?: boolean;
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;
  color?: string;
}>`
  font-family: ${StandardFont};
  font-size: 45px;
  line-height: 50px;
  font-stretch: normal;
  font-weight: 900;
  letter-spacing: -0.9px;
  ${optional("marginBottom", "margin-bottom")}
  ${optional("textAlign", "text-align")}
  ${optional("alignSelf", "align-self")}
  ${optional("maxWidth", "max-width")}
  ${optional("color", "color", theme.colours.black)}

  -webkit-text-size-adjust:100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
`;
