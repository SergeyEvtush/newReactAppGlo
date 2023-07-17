import React from "react";
import styled from "styled-components";

const AddButton = styled.button`
  width: 250px;
  height: 65px;
  font-size: 21px;
  line-height: 1.17%;
  color: #fff;
  background-color: #299b01;
  border-color: transparent;
  margin: 0 auto;
  transition-property: color, background-color, border-color;
  transition-duration: 0.3s;
  &:hover {
    color: #299b01;
    background-color: #fff;
    border-color: #299b01;
  }
`;

export const Button = ({ buttonText }) => (
  <>
    <AddButton>{buttonText}</AddButton>
  </>
);
