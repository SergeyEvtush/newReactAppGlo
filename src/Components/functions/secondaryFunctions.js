export const totalPriceItems = (order) => order.price * order.count;

export function returnRubbles(item) {
  return item.toLocaleString("ru-RU", {
    style: "currency",
    currency: "RUB",
  });
}
