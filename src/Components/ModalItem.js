import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

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

export const ModalItem = ({ openItem, setOpenItem }) => {
  function closeModal(e) {
    if (e.target.id === "overlay") {
      setOpenItem(null);
    }
  }

  if (!openItem) {
    return null;
  }

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />
        <ContentBanner>
          <TitleBanner>
            <TitleBannerParagraph>{openItem.name}</TitleBannerParagraph>
            <TitleBannerParagraph>
              {openItem.price.toLocaleString("ri-RU", {
                style: "currency",
                currency: "RUB",
              })}
            </TitleBannerParagraph>
          </TitleBanner>
          <Button buttonText="Добавить" />
        </ContentBanner>
      </Modal>
    </Overlay>
  );
};
