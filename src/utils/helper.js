import { isWithinInterval, subMonths, subWeeks } from "date-fns";

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
  data.append("upload_preset", "shortletsandmore");

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/HEIGHTS/image/upload",
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

export const getLastMonthData = (array) => {
  const today = new Date(); // getting today's date
  const priorMonth = subMonths(today, 1); //takes the date to be changed and the amount of months to be subtracted

  array = array || [];
  //checking if item date is in the array is withtin the interval
  return array.filter((item) =>
    isWithinInterval(new Date(item.checkinDate || item.datecreated), {
      //the interval to check
      start: priorMonth,
      end: today,
    })
  );
};

export const getLastWeekData = (array) => {
  const today = new Date(); // getting today's date
  const priorWeek = subWeeks(today, 1); //takes the date to be changed and the amount of weeks to be subtracted

  array = array || [];
  //checking if item date is in the array is withtin the interval
  return array.filter((item) =>
    isWithinInterval(new Date(item.checkinDate || item.datecreated), {
      //the interval to check
      start: priorWeek,
      end: today,
    })
  );
};

export const mergedChartData = (checkin, reservation) => {
  let mergedList = [];
  checkin?.forEach((checkin) => {
    reservation?.forEach((reservation) => {
      if (checkin.name === reservation.name) {
        let newList = { ...checkin, ...reservation };
        mergedList.push(newList);
      }
    });
  });
  return mergedList;
};

export const getUniqueListBy = (arr, key) => {
  return [...new Map(arr.map((item) => [item[key], item])).values()];
};
