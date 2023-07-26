export const totalPriceItems = (order) => {
  let countTopping = 0;
  if (order.topping !== "undefined" && order.topping !== null) {
    countTopping =
      order.topping && order.topping.filter((item) => item.checked).length;
  }

  const priceTopping = order.price * 0.1 * countTopping;
  return (order.price + priceTopping) * order.count;
};

export function returnRubbles(item) {
  return item.toLocaleString("ru-RU", {
    style: "currency",
    currency: "RUB",
  });
}

export const projection = (rules) => {
  const keys = Object.keys(rules);
  return (obj) =>
    keys.reduce((newObj, key) => {
      newObj[key] = rules[key].reduce(
        (val, fn, i) => (i ? fn(val) : obj[key]),
        null
      );
      return newObj;
    }, {});
};
