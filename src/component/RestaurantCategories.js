import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategories = ({ data, setShowIndex }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
    setShowIndex(); // Assuming this function is used to update the index in the parent component
  };

  return (
    <div>
      <div className="w-full md:w-9/12 mx-auto my-4">
        <div className="bg-gray-100 shadow-lg p-4 rounded-lg">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={handleClick}
          >
            <span className="font-bold text-lg">
              {data.title} ({data.itemCards.length})
            </span>
            <span className="text-xl">{showItems ? "⬆" : "⬇"}</span>
          </div>
          {showItems && <ItemList items={data.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategories;
