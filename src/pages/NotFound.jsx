import { Link } from "react-router-dom";
import notfoundImg from "/notfound.png";

export const NotFound = () => {
  return (
    <div className="text-center m-auto gap-3 flex flex-col items-center">
      <img src={notfoundImg} alt="" />
      <h1 className="font-semibold text-6xl">404</h1>
      <h2 className="font-semibold text-4xl">Page not found</h2>
      <p>The resource requested could not be found in this server.</p>
      <Link
        to={"/"}
        className="bg-[#51267D] text-white p-3 rounded-3xl hover:opacity-90"
      >
        Go Back to Home
      </Link>
    </div>
  );
};
