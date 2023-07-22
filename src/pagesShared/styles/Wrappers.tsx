import styled from 'styled-components';
import { HeightWithNavbar, PageContentWidth, PageWidth } from 'Mixins/Position';
import breakpoint from 'styled-components-breakpoint';
import { LightBoxShadow } from 'Mixins/NewFont';
import { BoxShadowHeavy, Card } from 'components/styling/Ui';
import { optional } from 'utils/styledComponents';
import { ScreenFormHorizontalPadding, ScreenFormVerticalPadding } from 'Mixins/Style';

/* For wrapping an entire Page */
export const PageWrapper = styled.div<{
  background?: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-y: scroll;
  width: 100%;
  ${optional('background', 'background')}
  position: relative;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const HomePageWrapper = styled.div<{
  background?: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  ${PageWidth}
  position: absolute;
  ${optional('background', 'background-color', 'white')}
  overflow-y: scroll;
  scroll-behaviour: smooth;
  height: 100%;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

/* For a page that just contains content that we put in */
export const PageRawInnerContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  height: 100%;
  ${PageContentWidth}

  ${breakpoint('mobile', 'tablet')`
    padding: 6px 16px 24px 16px;
  `}

  ${breakpoint('tablet', 'desktop')`
    padding-top: 64px;
  `}

  ${breakpoint('desktop')`
    padding-top: 96px;
  `}
`;

/* A card that goes directly onto a page */
export const PageCard = styled(Card)<{
  marginBottom?: string;
  marginRight?: string;
  alignItems?: string;
  clickable?: boolean;
  maxWidth?: string;
  alignSelf?: string;
  borderColor?: string;
  background?: string;
  padding?: string;
}>`
  display: flex;
  flex-direction: column;
  ${optional('alignItems', 'align-items', 'flex-start')}
  ${optional('justifyContent', 'justify-content', 'flex-start')}
  ${optional('alignSelf', 'align-self')}
  position: relative;

  /* From https://css.glass */
  background: rgba(238, 238, 238, 0.46);
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(7.2px);
  -webkit-backdrop-filter: blur(7.2px);
  border: 1px solid ${({ theme }) => theme.newColours.grey1};

  border-radius: 6px;
  ${({ clickable }) => (clickable ? 'cursor: pointer;' : '')}

  ${optional('marginBottom', 'margin-bottom')}
  ${optional('marginRight', 'margin-right')}
  ${optional('padding', 'padding')}
  ${optional('background', 'background')}

  ${optional('maxWidth', 'max-width', '100%')}
  max-height: 55%;

  ${breakpoint('tablet', 'desktop')`
    margin-top: 64px;
    width: 900px;
    height: 600px;
    max-height: 100%;
    max-width: 100%;
  `}

  ${breakpoint('desktop')`
    margin-top: 96px;
    width: 900px;
    height: 600px;
    max-height: 100%;
    max-width: 100%;
  `}
`;

export const HeaderSection = styled.div<{
  bgColor?: string;
}>`
  display: flex;
  flex: 0 1 auto;
  justify-content: center;
  align-items: center;
  width: 100%;

  ${ScreenFormHorizontalPadding}
  ${ScreenFormVerticalPadding}


  ${optional('bgColor', 'background-color')};
  margin-bottom: 24px;
  border-radius: 10px 10px 0px 0px;
  padding-top: 25px !important;
  padding-bottom: 16px !important;
`;

/* For wrapping an entire screen of a page */
export const ScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: transparent;
  width: 100%;
  height: 100%;
  position: relative;
`;

/* If a screen is simply a form, we can use this instead of ScreenWrapper*/
export const ScreenFormWrapper = styled.div<{
  height?: string;
  noPadding?: boolean;
  zIndex?: number;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;

  ${({ height }) => (height ? `height: ${height};` : 'min-height: 75vh;')}

  background-color: white;

  ${optional('zIndex', 'z-index', 0)}
  ${({ theme, noPadding }) => (!noPadding ? ScreenFormHorizontalPadding({ theme }) : '')}
  ${({ theme, noPadding }) => (!noPadding ? ScreenFormVerticalPadding({ theme }) : '')}


  background:  ${({ theme }) => theme.newColours.white};

  ${breakpoint('mobile', 'tablet')`
    margin: 24px 16px;
    width: calc(100% - 32px);
    min-width: 300px;
  `}

  ${breakpoint('tablet', 'desktop')`
    margin-top: 64px;
    width: 100%;
    max-width: 500px;
  `}

  ${breakpoint('desktop')`
    margin-top: 96px;
    width: 100%;
    max-width: 500px;
  `}
`;
