import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const BeeShape = styled.div`
  position: absolute;
  bottom: -20px;
  left: -9.4vw;
  background-image: url("../../assets/img/bee.png");
  opacity: 0.5;
`;

export const HomeAuth = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2vh 0 0;
`;

export const SectionMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12vh 0 6.4vh;
  grid-gap: 3vw;
`;

export const ItemDescPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  grid-gap: 30px;
`;

export const MainTitle = styled.div`
  display: flex;
  grid-gap: 20px;
`;

export const MainTitleStick = styled.div`
  width: 10px;
  background-color: #447cf5;
`;

export const SectionFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 2vw;
  margin-bottom: 9vh;
`;

export const BalanceBox = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: #447cf5;
  border-radius: 8px;
  padding: 15px;
  grid-gap: 15px;
  width: 22vw;
`;

export const BalanceSymbol = styled.div`
  display: flex;
  align-items: center;
  background-color: #212428;
  border-radius: 6px;
  padding: 15px;
`;

export const BalanceInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

export const BalanceName = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 15px 15px 5px;
`;

export const BalanceAmount = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 7px;
  background-color: #1e51bf;
  border-radius: 6px;
  width: 90%;
  
  @media only screen and (min-width: 768px) {

}
`;

