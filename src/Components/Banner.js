import React from 'react';
import styled from 'styled-components';
import BannerImage from '../image/banner.png';


const StyledDiv = styled.div`
max-width:100vw;
min-height: 300px;
background-image: ${({ img }) => `url(${img})`};
background-position:center;
background-size:cover;
`;


export const Banner = () => (
	<StyledDiv img={BannerImage}>
	</StyledDiv>
)