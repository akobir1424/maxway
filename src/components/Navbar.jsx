import logo from "/logo.svg";
import { FaLocationDot } from "react-icons/fa6";
import { Select } from "antd";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const onchan = (val) => {
  console.log(val);
};

export const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 z-10 border bg-white w-[100%] m-auto py-5 flex items-center justify-around">
        <Link to={"/"} className="flex items-center">
          <img src={logo} alt="logo" />
          <ul className="flex p-3 text-lg gap-[25px] ml-[25px]">
            <Link to={"/"} className="hover:font-semibold hover:cursor-pointer">
              Menyu
            </Link>
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
              to={"contacts"}
              className="hover:font-semibold hover:cursor-pointer"
            >
              Bog'lanish
            </Link>
          </ul>
        </Link>
        <div>
          <div className="flex items-center text-indigo-900 gap-3">
            <div className="bg-indigo-100 cursor-pointer rounded-full w-[35px] h-[35px] flex justify-center items-center">
              <FaLocationDot />
            </div>
            <p className="text-[12px] cursor-pointer">
              Yetqazib berish yoki Olib ketish <br /> Qabul qilib olish turini
              tanlang
            </p>
            <Select
              defaultValue="O'zbekcha"
              onChange={onchan}
              style={{
                width: 120,
              }}
              options={[
                {
                  value: "o'zbekcha",
                  label: "O'zbekcha",
                },
                {
                  value: "русский",
                  label: "Русский",
                },
                {
                  value: "english",
                  label: "English",
                },
              ]}
            />
            <Link
              to={"cart"}
              className="cursor-pointer flex items-center gap-2"
            >
              <div className="bg-indigo-100 rounded-full w-[35px] h-[35px] flex justify-center items-center">
                <FaCartShopping />
              </div>
              <p>2000 so'm</p>
            </Link>
            <div className="cursor-pointer bg-indigo-100 rounded-full w-[35px] h-[35px] flex justify-center items-center">
              <FaUserAlt />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
