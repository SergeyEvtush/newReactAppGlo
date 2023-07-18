import { useState } from "react";

const getTopping = (toppings) => {
  if (toppings !== null && toppings !== "undefined") {
    return toppings.map((item) => ({
      name: item,
      checked: false,
    }));
  } else {
    return;
  }
};

export function useToppings(openItem) {
  const [toppings, setToppings] = useState(getTopping(openItem.toppings));

  const checkToppings = (index) => {
    setToppings(
      toppings.map((item, i) => {
        if (index === i) {
          item.checked = !item.checked;
        }

        return item;
      })
    );
  };

  return { toppings, checkToppings };
}
