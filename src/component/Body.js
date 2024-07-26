import { useEffect, useState } from "react";
import { restaurentList } from "../config";
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
  if (!allrestaurents) return null;
  if (allrestaurents.length === 0) return <Shimmer />;
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-center p-5 bg-pink-50 mx-2 my-2">
        <input
          type="text"
          className="focus:outline-0 rounded-l-lg w-[60%] p-2 ml-2"
          placeholder="Search"
          value={SearchIP}
          onChange={(e) => {
            setSearchIP(e.target.value);
          }}
        />
        <button
          className="p-2 md:p-3 ml-2 md:ml-0 md:mr-2 w-full md:w-[10%] bg-green-600 text-white rounded-r-lg hover:bg-red-600"
          onClick={() => {
            //filter data
            const data = filterData(SearchIP, restaurentList);
            //update data
            setFillteredrestaurents(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaruntList flex justify-between flex-wrap">
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
