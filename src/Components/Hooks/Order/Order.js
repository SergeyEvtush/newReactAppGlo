import React from "react";
import styled from "styled-components";
import { ref, set } from "firebase/database";
import { AddButton } from "../Style/Button";
import { OrderListItem } from "./OrderListItem";
import {
  returnRubbles,
  totalPriceItems,
  projection,
} from "../../functions/secondaryFunctions";

const OrderStyled = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 80px;
  left: 0;
  background-color: #fff;
  min-width: 380px;
  height: calc(100% - 80px);
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
  padding: 20px;
`;
const OrderTitle = styled.h2`
  text-align: center;
  margin: 0 35px 30px;
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul``;

const EmptyList = styled.p`
  text-align: center;
`;

const Total = styled.div`
  display: flex;
  margin-bottom: 30px;
  & span:first-child {
    flex-grow: 1;
  }
`;

const TotalPrice = styled.span`
  text-align: right;
  min-width: 65px;
  margin-left: 20px;
`;

const rulesData = {
  name: ["name"],
  price: ["price"],
  count: ["count"],
  topping: [
    "topping",
    (arr) =>
      arr.length > 0
        ? arr.filter((item) => item.checked === true).map((el) => el.name)
        : "no toppings",
  ],
  choice: ["choices", (item) => (item ? item : "no choices")],
};

export const Order = ({
  orders,
  setOrders,
  setOpenItem,
  authentification,
  logIn,
  firebaseDataBase,
}) => {
  const total = orders.reduce((res, item) => totalPriceItems(item) + res, 0);
  const totalCounter = orders.reduce((res, item) => item.count + res, 0);
  const dataBase = firebaseDataBase();
  const sendOrder = () => {
    const newOrder = orders.map(projection(rulesData));
    set(ref(dataBase, "orders"), {
      username: authentification.displayName,
      email: authentification.email,
      order: newOrder,
    });
    /*  dataBase.ref("orders").push().set({
      name: authentification.displayName,
      email: authentification.email,
      order: newOrder,
    }); */
  };

  const checkUser = () => {
    if (authentification === null) {
      logIn();
    } else {
      sendOrder();
    }
  };

  const deleteItem = (index) => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
  };
  return (
    <>
      <OrderStyled>
        <OrderTitle>Ваш заказ</OrderTitle>
        <OrderContent>
          {orders.length ? (
            <OrderList>
              {orders.map((order, pos) => (
                <OrderListItem
                  order={order}
                  deleteItem={deleteItem}
                  key={pos}
                  index={pos}
                  setOpenItem={setOpenItem}
                />
              ))}
            </OrderList>
          ) : (
            <EmptyList>Список заказов пуст</EmptyList>
          )}
        </OrderContent>
        <Total>
          <span>Итого</span>
          <span>{totalCounter}</span>
          <TotalPrice>{returnRubbles(total)}</TotalPrice>
        </Total>
        <AddButton onClick={checkUser}>Оформить</AddButton>
      </OrderStyled>
    </>
  );
};
