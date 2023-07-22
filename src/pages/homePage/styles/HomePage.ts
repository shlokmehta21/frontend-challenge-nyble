import { BoxShadow } from 'components/styling/Ui';
import styled from 'styled-components';
import { optional } from 'utils/styledComponents';

export const HomePageWrapper = styled.div`
  flex: 1;
  flex-direction: column;
  height: 100%;
  align-items: center;
  align-content: center;

  justify-content: flex-start;
  z-index: 1;
`;

export const HomePageTopSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  justify-content: flex-start;

  height: 100%;

  padding: 20px 20px;
  margin-bottom: 24px;
  padding-top: 60px;

  z-index: 1;

  width: 100%;
  background-color: ${({ theme }) => theme.colours.dark};
`;

export const HomePageBottomSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  justify-content: flex-start;

  height: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 30px 25px;

  z-index: 1;

  width: 100%;
  background-color: ${({ theme }) => theme.colours.white};
  ${BoxShadow}
`;

export const HomeCardTitleRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  justify-content: space-between;
  align-items: flex-start;
  padding-top: 0px;
  top: 0px;

  margin-bottom: 24px;
`;

export const HomeCardFooterRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  bottom: 0px;
  margin-top: 30px;
  margin-bottom: 0px;
  padding-bottom: 0px;
  position: relative;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const HomeCardRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 95%;
  max-width: 600px;
  justify-content: space-between;
  align-items: center;
  align-self: center;
`;

export const HomeCard = styled.div<{
  background?: string;
  width?: string;
  minHeight?: string;
}>`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 600px;
  postition: relative;
  align-self: center;
  margin-top: 1px;

  border: 1px solid
    ${({ theme, background }) => (background ? background : theme.colours.lightBlueGrey)};

  justify-content: flex-start;
  background-color: ${({ theme, background }) => (background ? background : theme.colours.white)};
  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;
  padding: 15px 10px;
  ${BoxShadow};
  ${optional('width', 'width', '95%')}
  ${optional('minHeight', 'min-height', '120px')}
`;

export const HomePageWelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  width: 100%;
  max-width: 600px;
  left: 20px;
  top: 20px;
  position: relative;
`;

export const ReferAFriendCardInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 75%;
  padding-right: 5px;
  height: 100px;
  padding-left: 10px;
`;

export const CardRow = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;

  width: 100%;
  height: auto;
`;

export const HomeSectionElement = styled.div`
  flex 1;
  flex-direction: column
  padding: 10px;



`;

export const ImageHolder = styled.img`
  position: relative;
  width: 40vw;
  max-width: 280px;
  height: auto;
  margin: 16px;
  margin-bottom: 0px;
  padding-bottom: 0px;
`;

export const LinkSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const Pill = styled.div<{
  color?: string;
  bgColor?: string;
  height?: string;
  padding?: string;
}>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: 3px 3px;
  margin-left: 0px;
  border-radius: 16px;

  background-color: ${({ bgColor }) => (bgColor ? bgColor : 'red')};
  color: ${({ color }) => (color ? color : 'black')};
  ${optional('height', 'height', '16px')}
  ${optional('padding', 'padding', '15px 20px')}
`;

export const PillWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const PaymentWarningCard = styled.div<{
  background?: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 150px;

  max-width: 600px;
  align-self: center;

  background: ${({ theme, background }) => (background ? background : theme.colours.error)};

  align-items: center;
  padding: 5px 10px;
  position: relative;
  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;
  padding: 15px 10px;
  ${BoxShadow};
  ${optional('width', 'width', '95%')}
  ${optional('minHeight', 'min-height', '150px')}
`;

export const PaymentWarningCardResolveButton = styled.div`
  position: absolute;
  bottom: 0;
  right: 5px;
`;

export const EmailValidationCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 60px;

  max-width: 600px;
  align-self: center;
  background: ${({ theme }) => theme.colours.warning};
  position: relative;

  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;
  padding: 15px 10px;
  ${BoxShadow};
  ${optional('width', 'width', '95%')}
  ${optional('minHeight', 'min-height', '60px')}
`;

export const EmailValidationCardResolveButton = styled.div`
  position: absolute;
  bottom: 0;
  right: 5px;
`;

export const RewardsPill = styled.div`
  display: flex;

  flex-direction: row;
  min-width: 200px;
  min-height: 30px;
  max-width: 300px;
  align-self: center;
  margin-bottom: 12px;
  padding: 10px 20px;
  background: linear-gradient(
        ${({ theme }) => theme.newColours.slate},
        ${({ theme }) => theme.newColours.slate}
      )
      padding-box,
    linear-gradient(27deg, rgba(153, 161, 255, 1) 0%, rgba(255, 113, 178, 1) 100%) border-box;

  border-radius: 50px;
  border: 4px solid transparent;
  justify-content: flex-end;
`;
