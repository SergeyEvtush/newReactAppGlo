import React from "react";
import styled from "styled-components";
import logoImg from "../../../image/logo.svg";
import ButtonImg from "../../../image/sign.svg";

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #299b01;
  color: #fff;
`;

const LogoType = styled.div`
  display: flex;
  align-items: center;
`;
const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;
const ImgLogo = styled.img`
  width: ${(props) => (props.logo ? "50px" : "32px")};
`;
const EnterButton = styled.button`
  background-color: #299b01;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #fff;
  border: none;
`;
const Sign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const User = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;
const LogOut = styled.span`
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  margin-right: 30px;
`;

export const NavBar = ({ authentification, logIn, logOut }) => (
  <NavBarStyled>
    <LogoType>
      <ImgLogo logo="true" src={logoImg} alt="logo" />
      <H1>Shavuha</H1>
    </LogoType>

    {authentification ? (
      <User>
        <figure>
          <ImgLogo src={ButtonImg} alt={authentification.displayName} />
          <figcaption>{authentification.displayName}</figcaption>
        </figure>
        <LogOut title="Выйти" onClick={logOut}>
          Выйти
        </LogOut>
      </User>
    ) : (
      <Sign onClick={logIn}>
        <ImgLogo src={ButtonImg} alt="sign" />
        <EnterButton>войти</EnterButton>
      </Sign>
    )}
  </NavBarStyled>
);
