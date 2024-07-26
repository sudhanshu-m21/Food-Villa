const Shimmer = () => {
  return (
    <div className="min-h-screen flex flex-wrap justify-center items-center">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div key={index} className="shimmerCard w-48 h-48 m-4"></div>
        ))}
    </div>
  );
};

export default Shimmer;
