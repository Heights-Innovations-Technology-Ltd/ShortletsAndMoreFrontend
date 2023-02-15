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

export const mergedData = (cartContainer, availableItemContainer) => {
  let mergeContainer = [];
  cartContainer.forEach((cart) => {
    availableItemContainer.forEach((availableItem) => {
      if (availableItem.roomTypeId === cart.id) {
        let merged = { ...availableItem, ...cart };
        mergeContainer.push(merged);
      }
    });
  });
  return mergeContainer;
};
