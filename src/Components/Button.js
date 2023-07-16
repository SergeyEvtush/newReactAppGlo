import React from "react";
import styled from "styled-components";

const AddButton = styled.button`
  width: 250px;
  height: 65px;
  font-size: 21px;
  line-height: 1.17%;
  color: #fff;
  background-color: #299b01;
  border: none;
  margin: 0 auto;
  transition: box-shadow 0.3s ease 0.3s;
  &:hover {
    -webkit-box-shadow: -3px 1px 8px 9px rgba(34, 60, 80, 0.11);
    -moz-box-shadow: -3px 1px 8px 9px rgba(34, 60, 80, 0.11);
    box-shadow: -3px 1px 8px 9px rgba(34, 60, 80, 0.11);
  }
`;

export const Button = ({ buttonText }) => (
  <>
    <AddButton>{buttonText}</AddButton>
  </>
);
