import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import RestaurantCategories from "./RestaurantCategories";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const [categories, setCategories] = useState(null);
  const [restaurent, setRestaurent] = useState(null);
  const [showIndex, setShowIndex] = useState(null);

  useEffect(() => {
    getRestaurentInfo();
  }, []);

  async function getRestaurentInfo() {
    const data = await fetch(
      `https://proxy.cors.sh/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setRestaurent(json?.data?.cards[2]?.card?.card?.info);

    const categories =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    setCategories(categories);
  }

  if (!restaurent) return <Shimmer />;

  return (
    <div className="min-h-screen text-center m-6">
      <div className="mx-auto max-w-screen-lg">
        <h2 className="text-3xl font-bold">{restaurent?.name}</h2>
        <h1 className="mt-3 font-bold">
          Restaurant ID: <span className="font-semibold">{resId}</span>
        </h1>
        <h3 className="font-bold">
          Area: <span className="font-semibold">{restaurent?.areaName}</span>
        </h3>
        <h3 className="font-bold">
          City: <span className="font-semibold">{restaurent?.city}</span>
        </h3>
        <h3 className="font-bold">
          Rating:{" "}
          <span className="font-semibold">{restaurent?.avgRating} stars</span>
        </h3>

        {categories.map((category, index) => (
          <RestaurantCategories
            key={category?.card?.card?.title}
            data={category?.card?.card}
            setShowIndex={() =>
              index === showIndex ? setShowIndex(null) : setShowIndex(index)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurentMenu;
