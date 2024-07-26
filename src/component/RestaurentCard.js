import { IMG_URL } from "../config";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRatingString,
}) => {
  return (
    <div className="w-full sm:w-[320px] h-[400px] p-2 m-2 shadow-lg bg-pink-50 hover:scale-90 transition-all delay-100 rounded-lg z-0">
      <img
        className="w-full h-[200px] sm:h-[200px] object-cover rounded-t-lg"
        src={IMG_URL + cloudinaryImageId}
        alt={name}
      />
      <div className="p-4">
        <h2 className="font-bold text-xl">{name}</h2>
        <h3 className="text-sm text-gray-600">{cuisines.join(", ")}</h3>
        <h4 className="text-sm">{avgRatingString} star</h4>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestrauntCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-2 left-2 bg-black text-white px-2 py-1 rounded-lg z-10">
          Promoted
        </label>
        <RestrauntCard {...props} />
      </div>
    );
  };
};

export default RestrauntCard;
