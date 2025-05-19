import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="min-h-[100vh] flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-2 text-red-600">Oops!</h1>
        <h2 className="text-xl font-semibold mb-2">Something went wrong</h2>
        <h2 className="text-lg text-gray-600">
          {err.status + ": " + err.statusText}
        </h2>
      </div>
    </div>
  );
};

export default Error;
