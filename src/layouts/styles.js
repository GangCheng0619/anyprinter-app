import styled from "styled-components";

/* Header Section */

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  padding: 10px 20px;
  background-image: url("../assets/img/headerbackground.png");
  background-color: rgb(50, 2, 122);
  border-radius: 8px;
`;

export const HeaderUtils = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
`;

/* Footer Section */

export const FooterSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #120645aa;
  padding: 15px 0;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterSocialLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
`;

export const SocialLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  cursor: pointer;
`;
