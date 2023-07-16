import React from "react";
import styled from "styled-components";
import dbMenu from "./DBMenu";
import { ListItem } from "./ListItem";
import { Banner } from "./Banner";

const SectionMenu = styled.section`
  padding: 30px;
`;

const MenuStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px;
`;

export const Menu = ({ setOpenItem }) => (
  <MenuStyled>
    <Banner />
    <SectionMenu>
      <h2>Бургеры</h2>
      <ListItem itemList={dbMenu.burger} setOpenItem={setOpenItem} />
    </SectionMenu>

    <SectionMenu>
      <h2>Закуски и напитки</h2>
      <ListItem itemList={dbMenu.other} setOpenItem={setOpenItem} />
    </SectionMenu>
  </MenuStyled>
);