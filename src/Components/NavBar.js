import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg';
const NavBarStyled = styled.header`
position:fixed;
top:0;
left:0;
z-index:999;
height:80px;
width: 100vw;
display: flex;
justify-content:space-between;
align-items:center;
padding: 15px;
background-color: #299B01;
color:#fff;
`;

const Logo = styled.div`
display:flex;
align-items:center;
`;
const H1 = styled.h1`
font-size:24px;
margin-left: 15px;
`;
const ImgLogo = styled.img`
width: 50px;
`;
const EnterButton = styled.button`
background: #299B20;
line-height:2;
font-size: 20px;
font-family:Pacifico;
cursor: pointer;
border-radius:10px;

`;
export const NavBar = () => (
	<NavBarStyled>
		<Logo>
			<ImgLogo src={logoImg} alt="logo" />
			<H1>Shavuha</H1>
			</Logo>
		<EnterButton>Enter</EnterButton>
	</NavBarStyled>
);