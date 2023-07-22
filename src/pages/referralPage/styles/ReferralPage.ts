import styled from 'styled-components';

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  max-width: 350px;
  padding: 25px 15px 25px 15px;
  margin-bottom: 24px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colours.lightBlueGrey};
`;

export const CodeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  max-width: 350px;
  padding: 20px 15px 20px 15px;
  margin-bottom: 16px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colours.white};
  border: 15px solid ${({ theme }) => theme.newColours.slate};
`;
