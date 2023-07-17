import React from "react";
import styled from "styled-components";
import { AddButton } from "../Style/Button";
import { CountItem } from "./CountItem";
import { useCount } from "../useCount";
import {
  returnRubbles,
  totalPriceItems,
} from "../../functions/secondaryFunctions";

const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
`;

const Modal = styled.div`
  background-color: #fff;
  width: 600px;
  height: 600px;
`;
const Banner = styled.div`
  height: 200px;
  width: 100%;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
`;
const TitleBanner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px 0px 20px;
`;
const TitleBannerParagraph = styled.p`
  font-family: Pacifico;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.7;
`;

const ContentBanner = styled.div`
  width: 100%;
  height: 55%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

const TotalPriceItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {
  const counter = useCount();

  const closeModal = (e) => {
    if (e.target.id === "overlay") {
      setOpenItem(null);
    }
  };

  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  };
  const order = {
    ...openItem,
    count: counter.count,
  };

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />
        <ContentBanner>
          <TitleBanner>
            <TitleBannerParagraph>{openItem.name}</TitleBannerParagraph>
            <TitleBannerParagraph>
              {returnRubbles(openItem.price)}
            </TitleBannerParagraph>
          </TitleBanner>
          <CountItem {...counter} />
          <TotalPriceItem>
            <span>Цена:</span>
            <span>{returnRubbles(totalPriceItems(order))}</span>
          </TotalPriceItem>
          <AddButton onClick={addToOrder}>Добавить</AddButton>
        </ContentBanner>
      </Modal>
    </Overlay>
  );
};
