export const calculateTotalPrice = (itemContainer) => {
  const totalPrice = itemContainer.reduce((accumulator, room) => {
    return accumulator + room.price;
  }, 0);
  return totalPrice;
};
