import React, { useRef } from "react";
import styled from "styled-components";
import trashImage from "../../../image/trash.svg";
import {
  returnRubbles,
  totalPriceItems,
} from "../../functions/secondaryFunctions";
const OrderItemStyled = styled.li`
  display: flex;
  margin: 0px 0px;
`;

const TrashButton = styled.button`
  width: 24px;
  height: 24px;
  border-color: transparent;
  background-color: transparent;
  background-image: url(${trashImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const ItemName = styled.span`
  cursor: pointer;
  flex-grow: 1;
`;
const ItemPrice = styled.span`
  margin-left: 20px;
  margin-right: 10px;
  min-width: 65px;
  text-align: right;
`;
const ToppingContent = styled.p`
  font-size: 14px;
  color: #9a9a9a;
  line-height: 1.41;
  cursor: pointer;
`;

export const OrderListItem = ({ order, index, deleteItem, setOpenItem }) => {
  const refDeleteButton = useRef(null);

  return (
    <>
      <OrderItemStyled
        id={order.id}
        onClick={(e) => {
          e.target !== refDeleteButton.current &&
            setOpenItem({ ...order, index });
        }}
      >
        <ItemName>
          {order.name} {order.choice}
        </ItemName>
        <span>{order.count}</span>
        <ItemPrice>{returnRubbles(totalPriceItems(order))}</ItemPrice>
        <TrashButton
          onClick={() => deleteItem(index)}
          ref={refDeleteButton}
        ></TrashButton>
      </OrderItemStyled>
      <ToppingContent>
        {order.topping &&
          order.topping
            .map(
              (item, i) =>
                item.checked === true && `${item.name.toLowerCase()} `
            )
            .join(",")}
      </ToppingContent>
    </>
  );
};
