const Shimmer = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-100">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-full min-w-[250px] max-w-[300px] min-h-[380px] bg-gray-300 rounded-lg animate-pulse"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
