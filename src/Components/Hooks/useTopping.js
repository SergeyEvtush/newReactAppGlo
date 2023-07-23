import { useState } from "react";

const getTopping = (toppings) => {
  if (!!toppings) {
    return toppings.map((item) => ({
      name: item,
      checked: false,
    }));
  } else {
    return null;
  }
};

export function useToppings(openItem) {
  const readyToppings = openItem.topping
    ? openItem.topping
    : openItem.toppings
    ? getTopping(openItem.toppings)
    : [];
  const [toppings, setToppings] = useState(readyToppings);

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
