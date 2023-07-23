/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
import React from "react";
import { initializeApp } from "firebase/app";
import GlobalStyle from "./Components/Hooks/Style/GlobalStyle";
import { NavBar } from "./Components/Hooks/NavBar/NavBar";
import { Menu } from "./Components/Hooks/Menu/Menu";
import { ModalItem } from "./Components/Hooks/Modal/ModalItem";
import { Order } from "./Components/Hooks/Order/Order";
import { useOpenItem } from "./Components/Hooks/useOpenItem";
import { useOrders } from "./Components/Hooks/useOrders";
import { useAuth } from "./Components/Hooks/useAuth";

const firebaseConfig = {
  apiKey: "AIzaSyBRnPJYb2Iyho2PJJKAl3Ud8Oqt2ps-bWY",
  authDomain: "shavuha-85fc0.firebaseapp.com",
  projectId: "shavuha-85fc0",
  storageBucket: "shavuha-85fc0.appspot.com",
  messagingSenderId: "267238318484",
  appId: "1:267238318484:web:522aeca48c41864ca56f81",
};

const app = initializeApp(firebaseConfig);

function App() {
  const auth = useAuth(app);
  const openItem = useOpenItem();
  const orders = useOrders();
  return (
    <>
      <GlobalStyle />
      <NavBar {...auth} />
      <Order {...orders} {...openItem} {...auth} />
      <Menu {...openItem} />
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
}

export default App;
