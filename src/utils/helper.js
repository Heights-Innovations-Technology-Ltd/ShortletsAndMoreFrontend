export const calculateTotalPrice = (itemContainer) => {
  const totalPrice = itemContainer.reduce((accumulator, room) => {
    return accumulator + room.price * room.quantity;
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

export const convertToLink = async (image) => {
  const data = new FormData();
  data.append("file", image);
  data.append(
    "upload_preset",
    `${process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET}`
  );

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_NAME}/image/upload`,
    {
      method: "post",
      body: data,
    }
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
  return await res;
};
