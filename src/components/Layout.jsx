import { Link, Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import logo from "/logo.svg";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <hr />
      <main className="mb-10 mt-32 min-h-[450px] mx-auto max-w-[1250px]">
        <Outlet />
      </main>
      <hr />
      <footer className="mx-auto w-[1250px] border-b mb-5">
        <div className="flex my-8">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
          <ul className="mx-auto flex p-3 text-lg gap-[25px]">
            <Link
              to={"branches"}
              className="hover:font-semibold hover:cursor-pointer"
            >
              Filiallar
            </Link>
            <Link
              to={"about"}
              className="hover:font-semibold hover:cursor-pointer"
            >
              Biz haqimizda
            </Link>
            <Link
              to={"Contacts"}
              className="hover:font-semibold hover:cursor-pointer"
            >
              Bog'lanish
            </Link>
          </ul>
        </div>
      </footer>
      <div className="mx-auto w-[1250px] mb-5 flex justify-between">
        <p className="text-gray-500 text-lg">
          © Delever 2020 - 2024 Barcha huquqlar himoyalangan
        </p>
        <div className="social text-gray-500 text-2xl flex gap-5">
          <Link
            className="hover:text-indigo-800"
            target="_blank"
            to={"https://www.instagram.com/maxwayuz/"}
          >
            <FaInstagram />
          </Link>
          <Link
            className="hover:text-indigo-800"
            target="_blank"
            to={"https://www.facebook.com/maxway.uzb/"}
          >
            <FaFacebookSquare />
          </Link>
          <Link
            className="hover:text-indigo-800"
            target="_blank"
            to={"https://www.youtube.com/@maxway2010"}
          >
            <FaYoutube />
          </Link>
        </div>
      </div>
    </>
  );
};
