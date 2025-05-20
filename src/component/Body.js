import { useEffect, useState } from "react";
import RestrauntCard, { withPromotedLabel } from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [fillteredrestaurents, setFillteredrestaurents] = useState([]);
  const [allrestaurents, setAllRestaurents] = useState([]);
  const [SearchIP, setSearchIP] = useState("");
  const RestaurentWithPromotedLabel = withPromotedLabel(RestrauntCard);
  useEffect(() => {
    getRestaurents();
  }, []); //if we do not pass empty dependency array then it run every state change

  async function getRestaurents() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurents(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFillteredrestaurents(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  // console.log(allrestaurents);
  const isOnline = useOnline();
  if (!isOnline) return <h1>🔴Please check your internet</h1>;
  // condition rendering
  //shimmer ui??
  // if (!allrestaurents) return null;
  if (allrestaurents.length === 0) return <Shimmer />;
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex flex-col md:flex-row justify-center items-center p-5 bg-pink-50 mx-2">
        <input
          type="text"
          className="focus:outline-none rounded-l-full w-full md:w-[60%] p-2 px-4"
          placeholder="Search"
          value={SearchIP}
          onChange={(e) => {
            setSearchIP(e.target.value);
          }}
        />
        <button
          className="p-2 px-6 bg-green-600 text-white rounded-r-full hover:bg-red-600 w-full md:w-auto"
          onClick={() => {
            //filter data
            const data = filterData(SearchIP, allrestaurents);
            //update data
            setFillteredrestaurents(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaruntList grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 max-w-screen-xl mx-auto flex-grow pb-10">
        {fillteredrestaurents.map((restaurent) => {
          return (
            <Link
              to={"/restaurent/" + restaurent.info.id}
              key={restaurent.info.id}
            >
              {restaurent.info.avgRating >= 4.9 ? (
                <RestaurentWithPromotedLabel {...restaurent.info} />
              ) : (
                <RestrauntCard {...restaurent.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
