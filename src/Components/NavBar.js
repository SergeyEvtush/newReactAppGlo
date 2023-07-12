import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg';
import ButtonImg from '../image/sign.svg';

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



const LogoType = styled.div`
display:flex;
align-items:center;
`;
const H1 = styled.h1`
font-size:24px;
margin-left: 15px;
`;
const ImgLogo = styled.img`
width:${(props)=>(props.logo?"50px":"32px")};
`;
const EnterButton = styled.button`
background-color:#299B01;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
color: #FFF;
border:none;
`;
const Sign = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;

`;


export const NavBar = () => (
	<NavBarStyled>
		<LogoType>
			<ImgLogo logo="true" src={logoImg} alt="logo" />
			<H1>Shavuha</H1>
		</LogoType>
		<Sign>
			<ImgLogo src={ButtonImg} alt="sign" />
			<EnterButton>войти</EnterButton>
		</Sign>
	</NavBarStyled>
);