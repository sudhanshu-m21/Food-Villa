import { useState, useEffect } from "react";

export const useRestaurants = (resId) => {
  const [restaurent, setRestaurent] = useState(null);
  useEffect(() => {
    getRestaurentInfo();
  }, []);
  async function getRestaurentInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setRestaurent(json?.data?.cards[2]?.card?.card?.info);
    setMenuItems(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards || []
    );
  }
  return restaurent;
};
