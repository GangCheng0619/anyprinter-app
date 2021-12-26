import React from "react";
import { HeaderSection, HeaderUtils } from "./styles";
import Button from "../components/customs/Button";
import Text from "../components/customs/Text";

import logo from "../assets/img/logo.png";
import crossSign from "../assets/img/cross-sign.png";
import rabbit from "../assets/img/rabbit.png";
import wallet from "../assets/img/wallet.png";
import headerbg from "../assets/img/headerbackground.png";

const Header = () => {
  return (
    <HeaderSection>
      <img src={logo} alt="logo" width={60} />
      <HeaderUtils>
        <Button
          bgColor="#FF636B"
          bRadius={5}
          padding={10}
          fColor="white"
          cursor="pointer"
        >
          <Text mode="span" fColor="white" fSize={14}>
            <img src={rabbit} alt="rabbit" width={20} height={20} /> Buy on
            Pancakeswap
          </Text>
        </Button>
        <Button bgColor="#DEC02C" bRadius={5} padding={10} cursor="pointer">
          <Text mode="span" fSize={14}>
            <img src={crossSign} alt="crossSign" width={20} height={20} /> Add
            Anyp
          </Text>
        </Button>
        <Button
          bgColor="#447CF5"
          bRadius={5}
          padding={10}
          fColor="white"
          cursor="pointer"
        >
          <Text mode="span" fColor="white" fSize={14}>
            <img src={wallet} alt="wallet" width={20} height={20} /> Connect
            Wallet
          </Text>
        </Button>
      </HeaderUtils>
    </HeaderSection>
  );
};

export default Header;
