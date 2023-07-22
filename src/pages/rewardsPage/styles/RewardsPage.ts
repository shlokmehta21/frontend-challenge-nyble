import styled from 'styled-components';

export const PointSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;

  padding: 20px 10px 10px 15px;
  border-radius: 10px;
  height: 75px;
  width: 300px;
  background: ${({ theme }) => theme.newColours.slate};
`;

export const RedemptionSelectionRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 600px;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  margin-top: 30px;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  max-width: 350px;
  padding: 15px 10px 15px 10px;
  margin-bottom: 24px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colours.lightBlueGrey};
`;

export const RedemptionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  max-width: 350px;

  margin-bottom: 24px;
  border-radius: 10px;
`;
