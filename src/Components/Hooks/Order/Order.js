import React from "react";
import styled from "styled-components";
import { AddButton } from "../Style/Button";
import { OrderListItem } from "./OrderListItem";

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

export const Order = ({ orders }) => {
  return (
    <>
      <OrderStyled>
        <OrderTitle>Ваш заказ</OrderTitle>
        <OrderContent>
          {orders.length ? (
            <OrderList>
              {orders.map((key) => (
                <OrderListItem order={key} id={key} />
              ))}
            </OrderList>
          ) : (
            <EmptyList>Список заказов пуст</EmptyList>
          )}
        </OrderContent>
        <Total>
          <span>Итого</span>
          <span>5</span>
          <TotalPrice>850</TotalPrice>
        </Total>
        <AddButton>Оформить</AddButton>
      </OrderStyled>
    </>
  );
};
