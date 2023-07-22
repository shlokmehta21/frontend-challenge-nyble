const theme = {
  colours: {
    neutral: {
      light: '#F8F9FA',
      medium: '#EBEDF0',
      dark: '#0F1B2D',
    },
    primary: {
      light: '#E8F4CD',
      main: '#CFE795',
      dark: '#99C82D',
    },
    secondary: {
      light: '#E9C4D2',
      main: '#CD7A9A',
      dark: '#A13D63',
    },
    success: '#2DB573',
    error: '#A23216',
    warning: '#FDB34B',
    black: '#000000',
    white: '#FFFFFF',
  },
  breakpoints: {
    mobile: 0,
    tablet: 740,
    desktop: 1080,
  },
  sizing: {
    navbar: {
      mobile: {
        height: 60,
        iconHeight: 45,
      },
      tablet: {
        height: 70,
        iconHeight: 45,
      },
      desktop: {
        height: 65,
        iconHeight: 45,
      },
    },
    contentWidth: {
      tablet: 689,
      desktop: 1136,
    },
  },
};

export const getForCurrentScreenSize = <T,>(obj: { [key: string]: T }, currWidth: number): T => {
  if (currWidth < theme.breakpoints.tablet) {
    return obj['mobile'];
  }
  if (currWidth < theme.breakpoints.desktop) {
    return obj['tablet'];
  }
  return obj['desktop'];
};

export default theme;
