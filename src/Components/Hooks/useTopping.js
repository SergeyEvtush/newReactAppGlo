import { useState } from "react";

const getTopping = (toppings) => {
  if (!!toppings) {
    console.log(toppings);
    return toppings.map((item) => ({
      name: item,
      checked: false,
    }));
  } else {
    return null;
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
