// import { useState, useEffect } from "react";

// export const useRestaurantsMenu = (resId) => {
//   const [menuItems, setMenuItems] = useState([]);

//   useEffect(() => {
//     getRestaurentInfo();
//   }, []);
//   async function getRestaurentInfo() {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=" +
//         resId +
//         "&catalog_qa=undefined&submitAction=ENTER"
//     );
//     const json = await data.json();
//     // console.log(json);
//     setMenuItems(
//       json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
// ?.card?.itemCards || []
//     );
//   }
//   return menuItems;
// };
