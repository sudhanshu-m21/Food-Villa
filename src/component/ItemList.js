import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-400 border-b-2 text-left flex flex-col sm:flex-row items-start justify-between"
        >
          <div className="sm:w-9/12 mb-2 sm:mb-0 sm:pr-4">
            <div className="py-2">
              <span className="font-semibold">{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="sm:w-3/12 p-4 relative">
            <img
              className="rounded-lg w-full sm:w-auto"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                item.card.info.imageId
              }
              alt={item.card.info.name}
            />
            <button
              className="absolute w-[60%] bottom-2 right-[20%] p-1 text-green-500 bg-white shadow-lg rounded-lg font-bold"
              onClick={() => handleAddItem(item)}
            >
              ADD +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
