export const calculateTotalPrice = (itemContainer) => {
  const totalPrice = itemContainer.reduce((accumulator, room) => {
    return accumulator + room.price;
  }, 0);
  return totalPrice;
};

export const filterList = (cartArray, availableArray) => {
  let filteredList = [];
  availableArray.forEach((available) => {
    cartArray.forEach((cartItem) => {
      if (cartItem.id === available.roomTypeId) {
        filteredList.push(available);
      }
    });
  });
  return filteredList;
};
